export interface SocialProps {
  url: string
  icon: string
  label: string
  name: string
}

export function Social({ url, icon, label, name }: SocialProps) {
  return (
    <a
      className="flex items-center"
      href={url}
      title={name + ' de Agustín Licursi'}
      target="_blank"
      rel="noreferrer"
    >
      <img src={icon} alt={'Logo de ' + name} className="w-10 h-10 mr-4" />
      <span className="text-xs text-white">{label}</span>
    </a>
  )
}
