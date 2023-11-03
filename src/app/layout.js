import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { inter } from "./fonts"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ClerkProvider } from "@clerk/nextjs"

config.autoAddCss = false

export const metadata = {
  title: "r3vfitness",
  description: "Isaias Marzuca",
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en" className={inter.className}>
        <body>
          <NavBar />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
