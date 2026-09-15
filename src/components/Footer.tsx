import { Mail, Music2, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { navLinks, site } from "../data/site"
import { InstagramIcon } from "./icons"

const socialIcons = {
  instagram: InstagramIcon,
  tiktok: Music2,
  whatsapp: MessageCircle,
} as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span>CHOP</span>
            <span className="footer__logo-sub">by Brown</span>
          </Link>
          <p className="footer__tagline">Private dining experiences crafted with intention.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul className="footer__links" role="list">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <span className="footer__label">Get in touch</span>
          <a href={`mailto:${site.email}`} className="footer__email">
            <Mail size={15} strokeWidth={1.75} aria-hidden="true" />
            {site.email}
          </a>
          <ul className="footer__socials" role="list">
            {Object.keys(socialIcons).map((key) => {
              const Icon = socialIcons[key as keyof typeof socialIcons]
              const item = site.socials.find((s) => s.key === key)!
              const inner = <Icon size={17} strokeWidth={1.75} aria-hidden="true" />
              return item.url ? (
                <li key={key}>
                  <a
                    href={`${item.url}?text=${encodeURIComponent(
                      "Hello Brown, I'd love to enquire about a private dining experience.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social"
                    aria-label={`${item.label} — ${item.handle}`}
                    title={item.handle}
                  >
                    {inner}
                  </a>
                </li>
              ) : (
                <li key={key}>
                  <span
                    className="footer__social"
                    aria-label={`${item.label} — coming soon`}
                    title={`${item.label} — ${item.handle}`}
                  >
                    {inner}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} Chop by Brown. All rights reserved.</p>
        <p className="footer__bottom-note">Culinary experiences for the table.</p>
      </div>
    </footer>
  )
}