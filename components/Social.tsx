import Image from 'next/image'
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
      <Image
        src={icon}
        alt={'Logo de ' + name}
        width={64}
        height={64}
        layout="fixed"
      />
      <span className="ml-4 text-xs text-white">{label}</span>
    </a>
  )
}
