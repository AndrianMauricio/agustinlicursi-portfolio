import { Socials } from './Socials'
import { Social } from './Social'

export interface FooterProps {}

export function Footer(_: FooterProps) {
  return (
    <footer className="bg-gray-800 h-28">
      <Socials>
        <Social
          icon="/images/linkedin.svg"
          label="www.linkedin.com/in/agustín-licursi"
          name="LinkedIn"
          url="https://www.linkedin.com/in/agustín-licursi/"
        />
        <Social
          icon="/images/gmail.svg"
          label="agustinlicursi2403@gmail.com"
          name="Gmail"
          url="mailto:agustinlicursi2403@gmail.com"
        />
        <Social
          icon="/images/whatsapp.svg"
          label="+541125666596"
          name="Whatsapp"
          url="tel:+541125666596"
        />
      </Socials>
    </footer>
  )
}
