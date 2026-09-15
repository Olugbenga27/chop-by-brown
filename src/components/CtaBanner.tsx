import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { site } from "../data/site"
import { Reveal } from "./Reveal"
import { WhatsAppIcon } from "./icons"

export function CtaBanner() {
  return (
    <section className="section section--dark cta">
      <div className="container cta__inner">
        <Reveal>
          <span className="eyebrow">Ready when you are</span>
          <h2 className="cta__title">
            Every great experience begins with a conversation.
          </h2>
          <p className="cta__text">
            Tell Brown about your occasion and let&apos;s build the menu, mood and moment together.
          </p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--solid btn--lg">
              Request a Private Experience
              <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </Link>
            <a
              href={`${site.whatsappLink}?text=${encodeURIComponent(
                "Hello Brown, I'd love to enquire about a private dining experience.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--outline-light btn--lg"
            >
              <WhatsAppIcon size={16} aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}