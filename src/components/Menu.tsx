import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { menuCategories } from "../data/menu"
import { SectionHeading } from "./SectionHeading"
import { Reveal } from "./Reveal"

export function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const active = menuCategories.find((c) => c.id === activeId) ?? menuCategories[0]

  return (
    <section id="menu" className="section menu">
      <div className="container">
        <Reveal>
          <div className="menu__head">
            <SectionHeading eyebrow="Signature Menu" heading="A TASTE OF BROWN." />
            <p className="menu__intro">
              A seasonal, evolving menu — crafted around what you love. Every dish is a suggestion;
              the final menu is always built around you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="menu__tabs" role="tablist" aria-label="Menu categories">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={activeId === cat.id}
                aria-controls={`panel-${cat.id}`}
                className={`menu__tab ${activeId === cat.id ? "menu__tab--active" : ""}`}
                onClick={() => setActiveId(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={active.id}
          className="menu__panel"
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
        >
          <ul className="menu__list" role="list">
            {active.dishes.map((dish) => (
              <li key={dish.name} className="dish">
                <div className="dish__row">
                  <h3 className="dish__name">{dish.name}</h3>
                  {dish.price ? <span className="dish__price">{dish.price}</span> : null}
                </div>
                <p className="dish__desc">{dish.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <div className="menu__cta">
            <p className="menu__cta-text">
              This is just a taste. Menus are always designed around your occasion, tastes and dietary needs.
            </p>
            <Link to="/contact" className="btn btn--solid btn--lg">
              Request a Custom Menu <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}