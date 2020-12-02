import cn from 'classnames'
import Link from 'next/link'
import styles from './styles.module.scss'

export interface SubContentProps {
  details?: {
    tags: string[]
    title: string
  }
  image: string
  url: string
  className?: string
}

export function SubContent({
  details,
  className,
  image,
  url,
}: SubContentProps) {
  return (
    <Link href={url}>
      <a
        className={cn(
          styles.subContent,
          'transition-all duration-500 ease-in-out hover:shadow-2xl shadow-lg flex items-end overflow-hidden rounded-lg bg-gray-300 relative',
          className,
        )}
      >
        {details && (
          <span
            className={cn(
              styles.caption,
              'z-10 flex flex-col gap-3 bg-white p-3 w-full bg-opacity-90 transition-all duration-500 ease-in-out',
            )}
          >
            <span className="text-sm uppercase">
              {details.tags.join(' / ')}
            </span>
            <span className="heading text-xl uppercase font-medium">
              {details.title}
            </span>
            <span className="heading text-base font-bold bg-blue-500 hover:bg-blue-800 transition-all duration-500 ease-in-out rounded-md text-white flex items-center justify-center uppercase w-16 h-8">
              Ver
            </span>
          </span>
        )}

        <span
          className={cn(
            styles.image,
            'pointer-events-none absolute block w-full h-full bg-cover bg-center transition-all ease-in-out duration-1000',
          )}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      </a>
    </Link>
  )
}
