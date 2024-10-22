import { getInitials } from '@/libs/initials.ts'

import './avatar.css'

export const Avatar = ({ src, alt }: { src?: string; alt: string }) => {
  if (!src) {
    const initials = getInitials(alt)
    return (
      <div className="avatar avatar--empty">
        <span className="avatar__initials">{initials}</span>
      </div>
    )
  }

  return <img className="avatar" src={src} alt={alt} />
}
