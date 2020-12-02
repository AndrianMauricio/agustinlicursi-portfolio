import { Socials } from './Socials'
import { Social } from './Social'

export interface FooterProps {}

export function Footer(_: FooterProps) {
  return (
    <footer className="bg-gray-800 h-28">
      <Socials>
        <Social
          icon="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-512.png"
          label="www.linkedin.com/in/agustín-licursi"
          name="LinkedIn"
          url="https://www.linkedin.com/in/agustín-licursi/"
        />
        <Social
          icon="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
          label="agustinlicursi2403@gmail.com"
          name="Gmail"
          url="mailto:agustinlicursi2403@gmail.com"
        />
        <Social
          icon="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png"
          label="+541125666596"
          name="Whatsapp"
          url="tel:+541125666596"
        />
      </Socials>
    </footer>
  )
}
