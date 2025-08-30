"use client"

import type React from "react"
import { Compass, CalendarClock, Share2, Gamepad2, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useToast } from "@/hooks/use-toast"
import { getSupabaseBrowser } from "@/lib/supabase/client"

type Props = {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  } | null
}

export default function MapNavOverlay({ user }: Props) {
  const { toast } = useToast()

  function placeholder(msg: string) {
    toast({
      title: "Coming soon",
      description: msg,
    })
  }

  async function handleSignOut() {
    const supabase = getSupabaseBrowser()
    await supabase.auth.signOut()
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-40 p-4">
      <div className="pointer-events-auto mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-xl border border-border/50 bg-background/70 backdrop-blur px-3 py-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 grid place-items-center text-primary font-semibold">
              V
            </div>
            <span className="font-medium">Void</span>
          </div>

          <div className="flex items-center gap-2">
            <FeatureButton
              icon={<Compass className="h-4 w-4" />}
              label="Navigate"
              onClick={() => placeholder("Hook up Mappls Directions + turn-by-turn AR overlay")}
            />
            <FeatureButton
              icon={<CalendarClock className="h-4 w-4" />}
              label="Events"
              onClick={() => placeholder("Attach event layer with geo-fences, POIs, and schedules")}
            />
            <FeatureButton
              icon={<Share2 className="h-4 w-4" />}
              label="Share Path"
              onClick={() => placeholder("Record GPX/polyline and export link/video")}
            />
            <FeatureButton
              icon={<Gamepad2 className="h-4 w-4" />}
              label="Create Game"
              onClick={() => placeholder("Place AR checkpoints and scoring rules on map")}
            />
          </div>

          <div className="flex items-center gap-3">
            {user?.image ? (
              <Image
                src={user.image || "/placeholder.svg?height=28&width=28&query=user%20avatar"}
                alt={user?.name ?? "User"}
                width={28}
                height={28}
                className="rounded-full border border-border/50"
              />
            ) : (
              <div className="h-7 w-7 rounded-full bg-muted border border-border/50" />
            )}
            <span className="hidden md:inline text-sm text-muted-foreground">{user?.name ?? "Guest"}</span>
            <Button variant="outline" size="icon" title="Logout" onClick={handleSignOut}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}) {
  return (
    <Button variant="outline" size="sm" className="gap-2 bg-transparent" onClick={onClick}>
      <span aria-hidden="true">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </Button>
  )
}
