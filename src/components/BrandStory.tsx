import { Link } from "react-router-dom"
import { images } from "../data/images"
import { SmartImage } from "./SmartImage"
import { Reveal } from "./Reveal"

export function BrandStory() {
  return (
    <section id="about" className="section story">
      <div className="container story__grid">
        <div className="story__media">
          <div className="story__frame">
            <SmartImage
              src={images.story}
              alt="A bowl of Nigerian afang soup served with fufu and turkey"
              className="story__img"
            />
          </div>
          <div className="story__card">
            <span className="story__card-label">THE CHOP BY BROWN EXPERIENCE</span>
            <p className="story__card-text">
              Designed around your occasion, your guests and the evening you want to create.
            </p>
          </div>
          <span className="story__badge" aria-hidden="true" />
        </div>

        <div className="story__content">
          <Reveal>
            <span className="eyebrow">The Chop by Brown Experience</span>
            <h2 className="story__title">
              MORE THAN<br />A MEAL.
            </h2>
            <p className="story__text">
              Chop by Brown brings restaurant-quality culinary experiences into your home, event,
              celebration, or private gathering. Every menu is thoughtfully prepared around your
              occasion, your guests, and the kind of experience you want to create.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="story__points" role="list">
              <li>Bespoke menus, designed around you</li>
              <li>Private, chef-led dining at your table</li>
              <li>Every detail handled — so you can host freely</li>
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <Link to="/contact" className="btn btn--outline btn--lg">
              Start your own experience
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}