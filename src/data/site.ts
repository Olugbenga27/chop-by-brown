export const site = {
  name: "CHOP BY BROWN",
  email: "danielijika@gmail.com",
  whatsappNumber: "+234 904 017 3103",
  whatsappLink: "https://wa.me/2349040173103",
  phoneNumber: "+234 904 017 3103",
  phoneLink: "tel:+2349040173103",
  tagline: "Private Chef & Dining Experiences",
  description:
    "Chop by Brown creates unforgettable private dining and chef experiences for intimate dinners, celebrations, events and special occasions.",
  socials: [
    { label: "Instagram", handle: "Coming soon", key: "instagram" },
    { label: "TikTok", handle: "Coming soon", key: "tiktok" },
    {
      label: "WhatsApp",
      handle: "+234 904 017 3103",
      key: "whatsapp",
      url: "https://wa.me/2349040173103",
    },
  ] as { label: string; handle: string; key: "instagram" | "tiktok" | "whatsapp"; url?: string }[],
}

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experiences", to: "/experiences" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const