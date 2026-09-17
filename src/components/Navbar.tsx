import { useState, useEffect, useRef, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { navLinks, site } from "../data/site"
import { PhoneIcon, WhatsAppIcon } from "./icons"

const whatsappMessage = encodeURIComponent(
  "Hello Brown, I'd love to enquire about a private dining experience.",
)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = open ? "hidden" : prev || ""
    return () => { document.body.style.overflow = prev || "" }
  }, [open])

  const close = useCallback(() => {
    setOpen(false)
    setTimeout(() => toggleRef.current?.focus(), 50)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, close])

  return (
    <header className="nav">
      <nav className="nav__inner container">
        <Link to="/" className="nav__brand" onClick={close}>
          <span className="nav__brand-line">CHOP</span>
          <span className="nav__brand-sub">by Brown</span>
        </Link>

        <ul className="nav__links" role="list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="nav__cta btn btn--solid" onClick={close}>
          Book a Private Dining
        </Link>

        <button
          ref={toggleRef}
          className="nav__toggle btn btn--ghost"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>

        <div
          id="mobile-panel"
          className={`nav__panel ${open ? "nav__panel--open" : ""}`}
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal={open}
          aria-hidden={!open}
        >
          <ul className="nav__panel-links" role="list">
            {navLinks.map((link, i) => (
              <li key={link.to} style={{ transitionDelay: `${i * 60 + 100}ms` }}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `nav__panel-link ${isActive ? "nav__link--active" : ""}`
                  }
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="btn btn--solid nav__panel-cta"
            onClick={close}
            tabIndex={open ? 0 : -1}
          >
            Book a Private Dining
          </Link>
          <div className="nav__panel-actions">
            <a
              href={site.phoneLink}
              className="nav__panel-action"
              tabIndex={open ? 0 : -1}
            >
              <PhoneIcon size={15} strokeWidth={1.75} aria-hidden="true" />
              Call Brown
            </a>
            <a
              href={`${site.whatsappLink}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="nav__panel-action"
              tabIndex={open ? 0 : -1}
            >
              <WhatsAppIcon size={15} aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}