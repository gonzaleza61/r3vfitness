import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { inter } from "./fonts"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { ClerkProvider } from "@clerk/nextjs"
import { dark, neobrutalism } from "@clerk/themes"
//test deploy

config.autoAddCss = false

export const metadata = {
  title: "r3vfitness",
  description: "Isaias Marzuca",
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism],
        variables: {
          colorPrimary: "yellow",
          colorBackground: "gray",
          colorText: "white",
        },
      }}
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
