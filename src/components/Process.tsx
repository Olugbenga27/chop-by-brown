import { processSteps } from "../data/process"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"

export function Process() {
  return (
    <section id="process" className="section section--sand process">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="The Experience" heading="HOW IT WORKS" />
        </Reveal>

        <ol className="process__grid" role="list">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 110}>
              <li className="process__step">
                <span className="process__number" aria-hidden="true">
                  {step.number}
                </span>
                <div className="process__body">
                  <h3 className="process__title">{step.title}</h3>
                  <p className="process__text">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}