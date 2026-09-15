import { Quote, Star } from "lucide-react"
import { testimonials } from "../data/testimonials"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"

export function Testimonials() {
  return (
    <section id="testimonials" className="section section--sand testimonials">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Word of Mouth" heading="WHAT GUESTS SAY." />
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.occasion + t.guest} delay={i * 100}>
              <article className="testimonial-card">
                <Quote
                  size={30}
                  strokeWidth={1}
                  className="testimonial-card__quote"
                  aria-hidden="true"
                />
                <p className="testimonial-card__text">{t.quote}</p>
                <span className="testimonial-card__stars" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                  ))}
                </span>
                <footer className="testimonial-card__footer">
                  <span className="testimonial-card__guest">{t.guest}</span>
                  <span className="testimonial-card__occasion">{t.occasion}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}