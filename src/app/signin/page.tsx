"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Loader2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { getSupabaseBrowser } from "@/lib/supabase/client"

export default function SignInPage() {
  const [loading, setLoading] = useState<string | null>(null)

  async function doSignIn(provider: "google" | "github") {
    const supabase = getSupabaseBrowser()
    try {
      setLoading(provider)
      const redirectTo =
        process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
        (typeof window !== "undefined" ? `${window.location.origin}/dashboard` : "/dashboard")
      await supabase.auth.signInWithOAuth({
        provider,
        options: { redirectTo, skipBrowserRedirect: false },
      })
    } finally {
      setLoading(null)
    }
  }

  return (
    <main className="min-h-screen grid place-items-center px-4">
      <div className="w-full max-w-md rounded-xl border border-border/50 p-8 bg-card shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-orange-500/15 border border-orange-500/30 grid place-items-center text-orange-500 font-semibold">
              AR
            </div>
            <span className="font-semibold">AR Nav</span>
          </div>
          <Link href="/" className="text-xs text-muted-foreground hover:underline">
            Back to site
          </Link>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold mb-2">Welcome back</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Don&apos;t have an account? <span className="text-orange-400">Sign up</span>
        </p>

        <div className="flex flex-col gap-3">
          <Button
            onClick={() => doSignIn("google")}
            disabled={loading !== null}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            {loading === "google" ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Mail className="h-4 w-4 mr-2" />
            )}
            Continue with Google
          </Button>
          <Button variant="outline" onClick={() => doSignIn("github")} disabled={loading !== null} className="w-full">
            {loading === "github" ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Github className="h-4 w-4 mr-2" />
            )}
            Continue with GitHub
          </Button>
        </div>

        <div className="mt-6 text-xs text-muted-foreground flex items-center justify-between">
          <Link href="#" className="hover:underline">
            Forgot your password?
          </Link>
          <Link href="/dashboard" className="underline underline-offset-2">
            Continue as guest
          </Link>
        </div>
      </div>
    </main>
  )
}

