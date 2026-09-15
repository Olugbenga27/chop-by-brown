import { site } from "../data/site"
import { WhatsAppIcon } from "./icons"

const defaultMessage = encodeURIComponent(
  "Hello Brown, I'd love to enquire about a private dining experience.",
)

export function WhatsAppButton() {
  return (
    <a
      href={`${site.whatsappLink}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-btn"
      aria-label={`Chat with Brown on WhatsApp (${site.whatsappNumber})`}
    >
      <span className="wa-btn__ping" aria-hidden="true" />
      <WhatsAppIcon size={26} aria-hidden="true" />
      <span className="wa-btn__label">Chat with Brown</span>
    </a>
  )
}