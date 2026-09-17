import { site } from "../data/site"
import { PhoneIcon } from "./icons"

export function PhoneButton() {
  return (
    <a
      href={site.phoneLink}
      className="ph-btn"
      aria-label={`Call Brown on ${site.phoneNumber}`}
    >
      <span className="ph-btn__ping" aria-hidden="true" />
      <PhoneIcon size={26} strokeWidth={1.6} aria-hidden="true" />
      <span className="ph-btn__label">Call Brown</span>
    </a>
  )
}