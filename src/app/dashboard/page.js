"use client"
import { useUser, useAuth } from "@clerk/nextjs"
import { createClient } from "@supabase/supabase-js"
import { useEffect, useState } from "react"

const supabaseClient = async (supabaseAccessToken) => {
  const supabase = createClient(
    process.env.NEXT_SUPABASE_CLIENT_URL,
    process.env.NEXT_SUPABASE_KEY,
    {
      global: { headers: { Authorization: `Bearer ${supabaseAccessToken}` } },
    }
  )
  return supabase
}

export default function Dashboard() {
  const { user } = useUser()
  const { getToken } = useAuth()
  const [userName, setUserName] = useState("")

  const fetchData = async () => {
    // TODO #1: Replace with your JWT template name
    const supabaseAccessToken = await getToken({ template: "supabase" })

    const supabase = await supabaseClient(supabaseAccessToken)

    // TODO #2: Replace with your database table name

    const { data, error } = await supabase.from("your_table").select()

    // TODO #3: Handle the response
  }
  useEffect(() => {
    if (user) {
      const userID = user.id
      console.log("User ID: ", userID)
      setUserName(user.fullName)
      console.log(user)
    }
  }, [user])

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Hello {userName}</h2>
    </>
  )
}
