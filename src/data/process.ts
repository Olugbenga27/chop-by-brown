export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Tell us about your event",
    description:
      "Share your vision — the occasion, guest count, location, and the kind of experience you want to create.",
  },
  {
    number: "02",
    title: "Build your experience",
    description:
      "Brown will work with you to design a bespoke menu, service style and schedule tailored to your evening.",
  },
  {
    number: "03",
    title: "Brown prepares your menu",
    description:
      "Every dish is carefully sourced, prepared and finished on-site, ensuring freshness and quality at every stage.",
  },
  {
    number: "04",
    title: "Enjoy your private dining experience",
    description:
      "Brown arrives, sets up and takes care of everything — so you can be a guest at your own event.",
  },
]