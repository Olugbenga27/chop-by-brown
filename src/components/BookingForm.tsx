import { useState, type ChangeEvent, type FormEvent } from "react"
import { ArrowRight, CheckCircle2, Mail, Loader2 } from "lucide-react"
import { sendBookingRequest } from "../services/booking"
import { site } from "../data/site"
import { Reveal } from "./Reveal"

type FormValues = {
  fullName: string
  email: string
  phone: string
  eventType: string
  preferredDate: string
  guests: string
  location: string
  budget: string
  preferences: string
  dietary: string
  details: string
}

type FieldKey = keyof FormValues
type FormErrors = Partial<Record<FieldKey, string>>

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  eventType: "",
  preferredDate: "",
  guests: "",
  location: "",
  budget: "",
  preferences: "",
  dietary: "",
  details: "",
}

const eventTypes = [
  "Private Dinner",
  "Birthday Celebration",
  "Anniversary",
  "Proposal",
  "Corporate Event",
  "Wedding / Engagement",
  "Intimate Gathering",
  "Other",
]

const budgetRanges = [
  "Under ₦500,000",
  "₦500,000 – ₦1,000,000",
  "₦1,000,000 – ₦2,500,000",
  "₦2,500,000+",
  "Prefer to discuss",
]

export function BookingForm() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle")

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name as FieldKey]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = (): FormErrors => {
    const next: FormErrors = {}
    if (!values.fullName.trim()) next.fullName = "Please enter your full name."
    if (!values.email.trim()) {
      next.email = "Please enter your email address."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Please enter a valid email address."
    }
    if (!values.phone.trim()) next.phone = "Please enter a contact number."
    if (!values.eventType) next.eventType = "Please select an event type."
    if (!values.preferredDate) next.preferredDate = "Please choose a preferred date."
    if (!values.guests.trim()) {
      next.guests = "Please tell us how many guests."
    } else if (Number(values.guests) < 1 || Number(values.guests) > 500) {
      next.guests = "Please enter a number between 1 and 500."
    }
    if (!values.location.trim()) next.location = "Please share the event location."
    return next
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstError = document.querySelector<HTMLElement>(".field--error")
      firstError?.focus()
      return
    }
    setStatus("submitting")
    try {
      await sendBookingRequest()
      setStatus("done")
    } catch {
      setStatus("idle")
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setStatus("idle")
  }

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
    "Private Dining Enquiry – Chop by Brown",
  )}`

  return (
    <section id="booking" className="section section--dark booking">
      <div className="container">
        <div className="booking__grid">
          <div className="booking__intro">
            <Reveal>
              <span className="eyebrow">Book with Brown</span>
              <h2 className="booking__title">
                LET'S CREATE<br />YOUR EXPERIENCE.
              </h2>
              <p className="booking__text">
                Tell us a little about your event and Brown will get back to you within 24 hours
                to start designing your private dining experience.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="booking__steps" role="list">
                <li>
                  <span className="booking__step-no">1</span> We review your request
                </li>
                <li>
                  <span className="booking__step-no">2</span> We discuss your vision & menu
                </li>
                <li>
                  <span className="booking__step-no">3</span> We confirm your experience
                </li>
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <a href={mailtoHref} className="booking__email">
                <Mail size={17} strokeWidth={1.5} aria-hidden="true" />
                Prefer email? {site.email}
              </a>
            </Reveal>
          </div>

          <Reveal delay={100} className="booking__form-wrap">
            <div className="booking__card">
              {status === "done" ? (
                <div className="booking__success">
                  <span className="booking__success-icon">
                    <CheckCircle2 size={40} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="booking__success-title">Request received.</h3>
                  <p className="booking__success-text">
                    Thank you. Brown will be in touch within 24 hours to begin crafting your
                    experience. If it&apos;s urgent, email{" "}
                    <a href={mailtoHref} className="booking__success-mail">
                      {site.email}
                    </a>
                    .
                  </p>
                  <button type="button" className="btn btn--outline" onClick={reset}>
                    Send another request
                  </button>
                </div>
              ) : (
                <form className="booking__form" onSubmit={handleSubmit} noValidate>
                  <div className="booking__fields">
                    <div className="field">
                      <label htmlFor="fullName">Full name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Your name"
                        value={values.fullName}
                        onChange={handleChange}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                        className={errors.fullName ? "field--error" : ""}
                      />
                      {errors.fullName ? (
                        <span id="fullName-error" className="field__error-msg" role="alert">
                          {errors.fullName}
                        </span>
                      ) : null}
                    </div>

                    <div className="field">
                      <label htmlFor="email">Email address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={values.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={errors.email ? "field--error" : ""}
                      />
                      {errors.email ? (
                        <span id="email-error" className="field__error-msg" role="alert">
                          {errors.email}
                        </span>
                      ) : null}
                    </div>

                    <div className="field">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+234 …"
                        value={values.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={errors.phone ? "field--error" : ""}
                      />
                      {errors.phone ? (
                        <span id="phone-error" className="field__error-msg" role="alert">
                          {errors.phone}
                        </span>
                      ) : null}
                    </div>

                    <div className="field">
                      <label htmlFor="eventType">Event type</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={values.eventType}
                        onChange={handleChange}
                        aria-invalid={!!errors.eventType}
                        aria-describedby={errors.eventType ? "eventType-error" : undefined}
                        className={errors.eventType ? "field--error" : ""}
                      >
                        <option value="" disabled>
                          Select an event type
                        </option>
                        {eventTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.eventType ? (
                        <span id="eventType-error" className="field__error-msg" role="alert">
                          {errors.eventType}
                        </span>
                      ) : null}
                    </div>

                    <div className="field">
                      <label htmlFor="preferredDate">Preferred date</label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={values.preferredDate}
                        onChange={handleChange}
                        aria-invalid={!!errors.preferredDate}
                        aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
                        className={errors.preferredDate ? "field--error" : ""}
                      />
                      {errors.preferredDate ? (
                        <span id="preferredDate-error" className="field__error-msg" role="alert">
                          {errors.preferredDate}
                        </span>
                      ) : null}
                    </div>

                    <div className="field">
                      <label htmlFor="guests">Number of guests</label>
                      <input
                        id="guests"
                        name="guests"
                        type="number"
                        min={1}
                        max={500}
                        inputMode="numeric"
                        placeholder="e.g. 8"
                        value={values.guests}
                        onChange={handleChange}
                        aria-invalid={!!errors.guests}
                        aria-describedby={errors.guests ? "guests-error" : undefined}
                        className={errors.guests ? "field--error" : ""}
                      />
                      {errors.guests ? (
                        <span id="guests-error" className="field__error-msg" role="alert">
                          {errors.guests}
                        </span>
                      ) : null}
                    </div>

                    <div className="field">
                      <label htmlFor="location">Location</label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="City / area / venue"
                        value={values.location}
                        onChange={handleChange}
                        aria-invalid={!!errors.location}
                        aria-describedby={errors.location ? "location-error" : undefined}
                        className={errors.location ? "field--error" : ""}
                      />
                      {errors.location ? (
                        <span id="location-error" className="field__error-msg" role="alert">
                          {errors.location}
                        </span>
                      ) : null}
                    </div>

                    <div className="field">
                      <label htmlFor="budget">Budget range (optional)</label>
                      <select id="budget" name="budget" value={values.budget} onChange={handleChange}>
                        <option value="" disabled>
                          Select a range
                        </option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="field field--full">
                      <label htmlFor="preferences">Cuisine / food preferences</label>
                      <textarea
                        id="preferences"
                        name="preferences"
                        rows={3}
                        placeholder="Any dishes, cuisines or flavours you love"
                        value={values.preferences}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="field field--full">
                      <label htmlFor="dietary">Dietary requirements</label>
                      <textarea
                        id="dietary"
                        name="dietary"
                        rows={3}
                        placeholder="Allergies, intolerances, vegan or halal needs"
                        value={values.dietary}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="field field--full">
                      <label htmlFor="details">Additional details</label>
                      <textarea
                        id="details"
                        name="details"
                        rows={3}
                        placeholder="Anything else we should know about your occasion"
                        value={values.details}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn--solid btn--lg booking__submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={17} strokeWidth={2} className="spinner" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Request a Private Experience
                        <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}