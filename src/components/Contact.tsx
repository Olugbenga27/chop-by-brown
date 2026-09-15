import { ArrowRight, MessageCircle, Music2 } from "lucide-react"
import { site } from "../data/site"
import { Reveal } from "./Reveal"
import { InstagramIcon } from "./icons"

const socialIcons = {
  instagram: InstagramIcon,
  tiktok: Music2,
  whatsapp: MessageCircle,
} as const

export function Contact() {
  const enquiryHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Private Dining Enquiry – Chop by Brown",
  )}`

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="contact__title">LET'S CHOP.</h2>
          <p className="contact__text">
            {site.name}
            <br />
            {site.tagline}
          </p>
          <p className="contact__text contact__text--muted">
            Have an occasion in mind? Tell Brown what you&apos;re dreaming of — the reply is always
            personal.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="contact__panel">
            <span className="eyebrow">Email</span>
            <a href={`mailto:${site.email}`} className="contact__email">
              {site.email}
            </a>
            <a href={enquiryHref} className="btn btn--solid btn--lg">
              Send an Enquiry <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </a>

            <div className="contact__socials">
              <span className="eyebrow">Follow along</span>
              <ul className="contact__socials-list" role="list">
                {Object.keys(socialIcons).map((key) => {
                  const Icon = socialIcons[key as keyof typeof socialIcons]
                  const item = site.socials.find((s) => s.key === key)!
                  const inner = (
                    <>
                      <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                      <span>{item.label}</span>
                    </>
                  )
                  return item.url ? (
                    <li key={key}>
                      <a
                        href={`${item.url}?text=${encodeURIComponent(
                          "Hello Brown, I'd love to enquire about a private dining experience.",
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social contact__social--link"
                        title={item.handle}
                      >
                        {inner}
                      </a>
                    </li>
                  ) : (
                    <li key={key}>
                      <span className="contact__social" title={`${item.label} — ${item.handle}`}>
                        {inner}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}