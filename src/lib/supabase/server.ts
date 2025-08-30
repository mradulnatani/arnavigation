import { cookies } from "next/headers"
import { createServerClient, type SupabaseClient } from "@supabase/ssr"

let serverClient: SupabaseClient | null = null

export function getSupabaseServer() {
  if (serverClient) return serverClient
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://YOUR_SUPABASE_PROJECT.supabase.co"
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY"
  serverClient = createServerClient(url, anon, { cookies })
  return serverClient
}
