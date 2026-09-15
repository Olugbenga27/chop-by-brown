import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { WhatsAppButton } from "../components/WhatsAppButton"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [pathname])

  return null
}

export function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}