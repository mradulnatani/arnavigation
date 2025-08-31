"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"
import { createClient } from "@supabase/supabase-js"
import type { User, Session } from "@supabase/supabase-js"

// Define the shape of the context data
interface SupabaseAuthContextType {
  supabase: ReturnType<typeof createClient> | null
  session: Session | null
  user: User | null
  isLoading: boolean
}

// Create the context with a default value
const SupabaseAuthContext = createContext<SupabaseAuthContextType>({
  supabase: null,
  session: null,
  user: null,
  isLoading: true,
})

// Custom hook to use the SupabaseAuthContext
export const useSupabaseAuth = () => useContext(SupabaseAuthContext)

// Provider component
export function SupabaseAuthContextProvider({ children }: { children: ReactNode }) {
  const [supabase, setSupabase] = useState<ReturnType<typeof createClient> | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initialize Supabase client
    const supabaseClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    setSupabase(supabaseClient)

    // Get initial session and listen for changes
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return (
    <SupabaseAuthContext.Provider value={{ supabase, session, user, isLoading }}>
      {children}
    </SupabaseAuthContext.Provider>
  )
}
