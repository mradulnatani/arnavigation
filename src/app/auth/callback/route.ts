import { NextResponse } from "next/server"
import { getSupabaseBrowser } from "@/lib/supabase/client"

export async function GET(request: Request) {
  const supabase = getSupabaseBrowser()
  const { searchParams } = new URL(request.url)

  // Exchange OAuth code for session
  const { data, error } = await supabase.auth.exchangeCodeForSession(searchParams)

  if (error) {
    console.error("OAuth error:", error)
    return NextResponse.redirect(new URL("/?error=auth", request.url))
  }

  // Redirect user to dashboard after success
  return NextResponse.redirect(new URL("/dashboard", request.url))
}

