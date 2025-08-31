"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function HomePage() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="w-full sticky top-0 z-40 border-b border-border/40 bg-background/75 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-orange-500/15 border border-orange-500/30 grid place-items-center text-orange-500 font-semibold">
              AR
            </div>
            <span className="font-semibold tracking-tight">AR Nav</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#product" className="hover:text-foreground">
              Product
            </Link>
            <Link href="#solutions" className="hover:text-foreground">
              Solutions
            </Link>
            <Link href="#pricing" className="hover:text-foreground">
              Pricing
            </Link>
            <Link href="#resources" className="hover:text-foreground">
              Resources
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline" onClick={() => router.push("/signin")}>
              Log in
            </Button>
            <Button
              onClick={() => router.push("/signin")}
              className="rounded-md bg-orange-500 hover:bg-orange-600 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="product" className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-6 text-left">
          <h1 className="text-4xl md:text-5xl font-semibold text-balance">Navigate Your World in AR</h1>
          <p className="text-muted-foreground leading-relaxed">
            Step into the future with immersive 3D navigation. AR Nav transforms wayfinding, guiding you through complex
            spaces and enabling custom AR/VR experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => router.push("/signin")} className="bg-orange-500 hover:bg-orange-600 text-white">
              Download Now
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-orange-500/40 text-orange-400 hover:text-orange-300 bg-transparent"
            >
              <Link href="#features">Explore Features</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          {/* If you want to embed your screenshot hero, replace src below with the provided Source URL */}
          <Image
            src={"/hero.jpeg"}
            alt="AR Nav hero visual"
            width={720}
            height={420}
            className="rounded-xl border border-border/50"
          />
        </div>
      </section>

      {/* Unlock a New Reality */}
      <section id="solutions" className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-3">Unlock a New Reality</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          AR Nav brings augmented reality to your fingertips. Create, share, and explore with our powerful set of AR/VR
          tools.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={
              <Image
                src={"/placeholder.svg?height=48&width=48&query=portrait%20avatar"}
                alt="avatar"
                width={48}
                height={48}
                className="rounded"
              />
            }
            title="Custom AR Experiences"
            desc="Build personalized AR walks for events, education, or entertainment. No coding required."
          />
          <FeatureCard
            icon={
              <Image
                src={"/placeholder.svg?height=48&width=48&query=gamepad%20icon"}
                alt="gamepad"
                width={48}
                height={48}
                className="rounded"
              />
            }
            title="Interactive 3D Maps"
            desc="Powered by Mappls. Our 3D maps provide intuitive, multi-level navigation for any indoor space."
          />
          <FeatureCard
            icon={
              <Image
                src={"/placeholder.svg?height=48&width=48&query=landscape%20illustration"}
                alt="landscape"
                width={48}
                height={48}
                className="rounded"
              />
            }
            title="Collaborative Exploration"
            desc="Share AR paths and experiences with friends, making discovery a social adventure."
          />
        </div>
      </section>

      {/* CTA band */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-border/50 bg-muted/30 p-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-3">Join the AR Revolution</h3>
          <p className="text-muted-foreground mb-6">
            Download AR Nav and experience the next generation of spatial computing today.
          </p>
          <Button onClick={() => router.push("/signin")} className="bg-orange-500 hover:bg-orange-600 text-white">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="resources" className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-8 w-8 rounded-md bg-orange-500/15 border border-orange-500/30 grid place-items-center text-orange-500 font-semibold">
                AR
              </div>
              <span className="font-semibold text-foreground">AR Nav</span>
            </div>
            <p>The future of navigation is here.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:col-span-3">
            <FooterCol title="Product" links={["Features", "Integrations", "Pricing"]} />
            <FooterCol title="Solutions" links={["Malls", "Airports", "Hospitals"]} />
            <FooterCol title="Resources" links={["Blog", "Case Studies", "Help Center"]} />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-8 text-xs text-muted-foreground flex items-center justify-between">
          <span>© {new Date().getFullYear()} AR Nav. All rights reserved.</span>
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
        <div className="rounded-md bg-primary/10">{icon}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  )
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-medium text-foreground mb-2">{title}</h4>
      <ul className="space-y-1">
        {links.map((l) => (
          <li key={l}>
            <Link href="#" className="hover:underline">
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

