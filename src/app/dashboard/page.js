"use client"
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const { user } = useUser()
  const [userName, setUserName] = useState("")

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
