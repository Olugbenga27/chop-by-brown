import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { services } from "../data/services"
import { SectionHeading } from "./SectionHeading"
import { SmartImage } from "./SmartImage"
import { Reveal } from "./Reveal"

export function Services() {
  return (
    <section id="experiences" className="section section--sand services">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Private Chef Services" heading="PRIVATE DINING, YOUR WAY." />
        </Reveal>

        <div className="services__grid">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 90}>
              <article className="service-card">
                <div className="service-card__media">
                  <SmartImage src={service.image} alt={service.title} className="service-card__img" />
                  <span className="service-card__index" aria-hidden="true">
                    {service.index}
                  </span>
                  <div className="service-card__veil" aria-hidden="true" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__text">{service.description}</p>
                  <Link to="/experiences" className="service-card__link">
                    Explore Experience <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}