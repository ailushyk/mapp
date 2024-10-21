import './info-message.css'

export const InfoMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className="info-message">{children}</p>
}
