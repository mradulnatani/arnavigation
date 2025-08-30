"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Compass, CalendarClock, Share2, Gamepad2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="w-full sticky top-0 z-40 border-b border-border/40 bg-background/75 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 grid place-items-center text-primary font-semibold">
              V
            </div>
            <span className="font-semibold tracking-tight">Void</span>
          </div>
          <Button onClick={() => router.push("/signin")} className="rounded-md">
            Login / Sign Up
          </Button>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16 flex flex-col items-center text-center gap-6">
        {/* Hero */}
        <h1 className="text-4xl md:text-5xl font-semibold text-balance">
          Lost in the Crowd? Navigate Your World in a New Dimension.
        </h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Void transforms static maps into immersive AR experiences. Find your way, share your journey, and turn any
          space into a playground—powered by geolocation and maps.
        </p>
        <div className="flex gap-3">
          <Button onClick={() => router.push("/signin")}>Get Started</Button>
          <Button variant="outline" asChild>
            <Link href="#features">Explore Features</Link>
          </Button>
        </div>

        {/* Subtle visual */}
        <div className="relative mt-8 w-full max-w-3xl">
          <Image
            src={
              "/placeholder.svg?height=420&width=960&query=abstract%20geo%20nodes%20and%20paths%20for%20map%20navigation"
            }
            alt="Abstract geospatial visualization"
            width={960}
            height={420}
            className="rounded-xl border border-border/50"
          />
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
          <h2 className="text-2xl font-semibold mb-3 text-pretty">The Limitations of a Flat World</h2>
          <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2 text-left">
            <li>Confusing indoor spaces like malls, airports, and hospitals.</li>
            <li>Static, boring directions for massive events and festivals.</li>
            <li>Hard to share dynamic routes like a run, hike, or rally.</li>
          </ul>
        </div>
        <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
          <h2 className="text-2xl font-semibold mb-3 text-pretty">Welcome to Void</h2>
          <p className="text-muted-foreground leading-relaxed text-left">
            We bring AR/VR navigation, dynamic event mapping, social path sharing, and custom AR games together into one
            platform to help you explore, organize, and create.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Compass className="h-5 w-5 text-primary" aria-hidden="true" />}
            title="3D AR/VR Navigation"
            desc="Intuitive, step-by-step directions overlaid on your world. Perfect for airports, hospitals, campuses—with Accessibility Mode."
          />
          <FeatureCard
            icon={<CalendarClock className="h-5 w-5 text-primary" aria-hidden="true" />}
            title="Dynamic Event Mapping"
            desc="Create temporary, interactive AR maps with live schedules and POIs for fests, melas, and conferences."
          />
          <FeatureCard
            icon={<Share2 className="h-5 w-5 text-primary" aria-hidden="true" />}
            title="Social Path Sharing"
            desc="Record and share journeys as stylish videos or interactive links—marathons, hikes, rallies, and more."
          />
          <FeatureCard
            icon={<Gamepad2 className="h-5 w-5 text-primary" aria-hidden="true" />}
            title="AR Game Creation"
            desc="Build treasure hunts and interactive stories—great for events, education, marketing, and team building."
          />
        </div>
      </section>

      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} Void</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:underline">
              Twitter
            </Link>
            <Link href="#" className="hover:underline">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="rounded-xl border border-border/50 p-5 bg-card">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-8 w-8 rounded-md bg-primary/10 grid place-items-center">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}
