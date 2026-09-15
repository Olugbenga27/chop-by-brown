import { images } from "./images"

export type Service = {
  id: string
  index: string
  title: string
  description: string
  image: string
}

export const services: Service[] = [
  {
    id: "private-dinner",
    index: "01",
    title: "Private Dinner",
    description:
      "An intimate multi-course dining experience prepared exclusively for you and your guests.",
    image: images.services.privateDinner,
  },
  {
    id: "intimate-celebrations",
    index: "02",
    title: "Intimate Celebrations",
    description:
      "Beautiful food and personalized service for birthdays, anniversaries, proposals and special moments.",
    image: images.services.celebrations,
  },
  {
    id: "event-catering",
    index: "03",
    title: "Event Catering",
    description:
      "Thoughtfully prepared menus for private events, corporate gatherings and celebrations.",
    image: images.services.eventCatering,
  },
  {
    id: "custom-menus",
    index: "04",
    title: "Custom Menus",
    description:
      "Menus designed around your preferences, dietary needs, occasion and guest list.",
    image: images.services.customMenus,
  },
]