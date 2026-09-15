import { useState } from "react"
import { fallbackImage } from "../data/images"

type SmartImageProps = {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export function SmartImage({ src, alt, className, eager }: SmartImageProps) {
  const [failed, setFailed] = useState(false)
  const resolved = failed || !src ? fallbackImage : src

  return (
    <img
      src={resolved}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  )
}