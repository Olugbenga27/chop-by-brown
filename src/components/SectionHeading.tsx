type Props = { eyebrow?: string; heading: string; align?: "center" | "left" }

export function SectionHeading({ eyebrow, heading, align = "center" }: Props) {
  return (
    <div className={`section-heading ${align === "left" ? "section-heading--left" : ""}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="section-heading__title">{heading}</h2>
    </div>
  )
}