import { images } from "./images"
import food1 from "../images/food-1.jpg"
import food2 from "../images/food-2.jpg"

export type GalleryItem = {
  id: string
  src: string
  alt: string
  caption: string
  span: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: images.hero,
    alt: "A lavish spread of plated dishes on a dark table",
    caption: "The feasting table",
    span: "wide tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80",
    alt: "Chef preparing food in a professional kitchen",
    caption: "In the kitchen",
    span: "",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
    alt: "Elegant candlelit table setting",
    caption: "Set for evening",
    span: "",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up of a colourful gourmet dish",
    caption: "Colour on the plate",
    span: "",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Fine dining dish being plated with precision",
    caption: "Plated with care",
    span: "",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=80",
    alt: "Chocolate dessert with rich glossy finish",
    caption: "The sweet ending",
    span: "",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Beautifully arranged tables for a private event",
    caption: "Events with intention",
    span: "wide",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    alt: "Charred grilled meat served on a dark plate",
    caption: "Slow smoke over fire",
    span: "",
  },
  {
    id: "g9",
    src: food1,
    alt: "Nigerian home-cooked food served at the table",
    caption: "Naija flavours",
    span: "",
  },
  {
    id: "g10",
    src: food2,
    alt: "A plate of classic Nigerian cuisine with rich stew",
    caption: "Home food, Brown style",
    span: "",
  },
]