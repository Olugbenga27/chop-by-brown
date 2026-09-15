import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { images } from "../data/images"
import { SmartImage } from "./SmartImage"

export function Hero() {
  return (
    <section id="home" className="hero">
      <SmartImage
        src={images.hero}
        alt="A lavish spread of dishes served on a dark wooden dining table"
        className="hero__bg"
        eager
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container">
        <span className="hero__badge reveal is-visible">
          <span className="hero__badge-dot" aria-hidden="true" />
          Private Chef & Dining Experiences
        </span>
        <h1 className="hero__title">
          <span className="hero__line hero__line--one">PRIVATE DINING,</span>
          <span className="hero__line hero__line--two">
            CRAFTED BY <em className="hero__accent">BROWN.</em>
          </span>
        </h1>
        <p className="hero__sub">Exceptional food, thoughtfully prepared and served in the comfort of your space.</p>
        <div className="hero__actions">
          <Link to="/contact" className="btn btn--solid btn--lg">
            Book a Private Experience
            <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
          </Link>
          <Link to="/menu" className="btn btn--outline btn--outline-light btn--lg">
            Explore the Menu
          </Link>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to next section">
        <span className="hero__scroll-line">
          <span className="hero__scroll-dot" />
        </span>
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  )
}