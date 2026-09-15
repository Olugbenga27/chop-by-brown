import { images } from "../data/images"
import { SmartImage } from "./SmartImage"
import { Reveal } from "./Reveal"

export function ChefSection() {
  return (
    <section id="chef" className="section section--dark chef">
      <div className="container chef__grid">
        <Reveal className="chef__media-wrap">
          <div className="chef__media">
            <SmartImage src={images.chef} alt="Brown working in the kitchen" className="chef__img" />
            <span className="chef__sign">Brown</span>
          </div>
        </Reveal>

        <div className="chef__content">
          <Reveal>
            <span className="eyebrow">Meet Brown</span>
            <h2 className="chef__title">MEET BROWN.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="chef__text">
              At Chop by Brown, food is about more than what is on the plate. Brown focuses on
              creating memorable dining experiences through bold flavours, thoughtful presentation
              and food that brings people together.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <figure className="chef__quote">
              <span className="eyebrow eyebrow--accent">The Chef's Philosophy</span>
              <blockquote className="chef__quote-text">
                “Good food should be remembered long after the plate is cleared.”
              </blockquote>
              <figcaption className="chef__caption">— Brown</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}