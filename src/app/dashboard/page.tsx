import { redirect } from "next/navigation"
import MapNavOverlay from "@/components/nav/map-nav-overlay"
import MapplsMap from "@/components/map/mappls-map"
import { getSupabaseServer } from "@/lib/supabase/server"

export default async function DashboardPage() {
  const supabase = getSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && process.env.NEXT_PUBLIC_ALLOW_GUEST !== "true") {
    redirect("/signin")
  }

  const defaultCenter = { lat: 28.6139, lng: 77.209 } // Delhi
  const sdkSrc = `https://apis.mappls.com/advancedmaps/api/${encodeURIComponent(
    process.env.MAPPLS_TOKEN || "YOUR_MAPPLS_TOKEN",
  )}/map_sdk?layer=vector&v=3.0`

  return (
    <main className="min-h-screen w-full relative">
      <script src={sdkSrc} async defer />

      {/* Fullscreen map */}
      <div className="absolute inset-0">
        <MapplsMap defaultCenter={defaultCenter} defaultZoom={12} showTraffic />
      </div>

      {/* Overlay navbar for core features */}
      <MapNavOverlay user={user} />
    </main>
  )
}
