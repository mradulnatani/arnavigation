"use client"

import { createBrowserClient, type SupabaseClient } from "@supabase/ssr"

let client: SupabaseClient | null = null

export function getSupabaseBrowser() {
  if (client) return client
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://YOUR_SUPABASE_PROJECT.supabase.co"
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY"
  client = createBrowserClient(url, anon)
  return client
}
