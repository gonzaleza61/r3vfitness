import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { inter } from "./fonts"

export const metadata = {
  title: "r3vfitness",
  description: "Isaias Marzuca",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
