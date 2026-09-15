import { galleryItems } from "../data/gallery"
import { SectionHeading } from "./SectionHeading"
import { SmartImage } from "./SmartImage"
import { Reveal } from "./Reveal"

export function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="The Visual Story" heading="MOMENTS FROM THE TABLE." />
        </Reveal>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => {
            const wide = item.span.includes("wide")
            const tall = item.span.includes("tall")
            const cellClass = `gallery__cell ${wide ? "gallery__cell--wide" : ""} ${
              tall ? "gallery__cell--tall" : ""
            }`
            return (
              <Reveal key={item.id} delay={(i % 4) * 70} className={cellClass}>
                <figure className="gallery__item">
                  <SmartImage src={item.src} alt={item.alt} className="gallery__img" />
                  <figcaption className="gallery__caption">
                    <span className="gallery__caption-text">{item.caption}</span>
                  </figcaption>
                </figure>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}