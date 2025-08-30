"use client"

import { useCallback, useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    initMap1?: () => void
  }
  // Mappls globals are not typed; declare for TS
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappls: any
}

type Props = {
  defaultCenter?: { lat: number; lng: number }
  defaultZoom?: number
  showTraffic?: boolean
}

export default function MapplsMap({
  defaultCenter = { lat: 28.6139, lng: 77.209 },
  defaultZoom = 11,
  showTraffic = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  const init = useCallback(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const map = new (window as any).mappls.Map(containerRef.current, {
        center: [defaultCenter.lat, defaultCenter.lng],
        zoom: defaultZoom,
      })

      map.addListener("load", () => {
        if (showTraffic && typeof (window as any).mappls?.traffic === "function") {
          ;(window as any).mappls.traffic({ map })
        }
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              map.setCenter({ lat: pos.coords.latitude, lng: pos.coords.longitude })
              map.setZoom(14)
            },
            () => {},
            { enableHighAccuracy: true, timeout: 5000 },
          )
        }

        // TODO: Mappls Search API integration (autocomplete + place details)
        // TODO: Directions API integration (route polyline + step list)
        // TODO: Marker & clustering utilities for POIs/events
        // TODO: Geofencing overlays for AR game zones
      })
    } catch (e: any) {
      setError(e?.message || "Failed to initialize map")
    }
  }, [defaultCenter.lat, defaultCenter.lng, defaultZoom, showTraffic])

  useEffect(() => {
    let cancelled = false
    let tries = 0

    const tryInit = () => {
      if (cancelled) return
      if ((window as any).mappls?.Map && containerRef.current) {
        init()
        return
      }
      tries += 1
      if (tries > 200) {
        setError("Mappls SDK not loaded")
        return
      }
      setTimeout(tryInit, 50)
    }

    tryInit()
    return () => {
      cancelled = true
    }
  }, [init])

  return (
    <div className="w-full h-full">
      <div ref={containerRef} id="map" className="w-full h-dvh" />
      {error ? (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-2 rounded-md bg-destructive/10 text-destructive text-sm border border-destructive/30">
          {error}
        </div>
      ) : null}
    </div>
  )
}
