"use client"
import { useClerk } from "@clerk/nextjs"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const { user, session } = useClerk()
  const [userName, setUserName] = useState("")

  useEffect(() => {
    if (session && user) {
      const userID = user.id
      console.log("User ID: ", userID)
      setUserName(user.fullName)
    }
  }, [session, user])

  return (
    <>
      <h1>Dashboard</h1>
      <h2>Hello {userName}</h2>
    </>
  )
}
