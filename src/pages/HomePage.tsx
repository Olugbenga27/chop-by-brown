import { Hero } from "../components/Hero"
import { BrandStory } from "../components/BrandStory"
import { Services } from "../components/Services"
import { Menu } from "../components/Menu"
import { Gallery } from "../components/Gallery"
import { Testimonials } from "../components/Testimonials"
import { CtaBanner } from "../components/CtaBanner"

export function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <Services />
      <Menu />
      <Gallery />
      <Testimonials />
      <CtaBanner />
    </>
  )
}