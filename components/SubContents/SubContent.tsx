import cn from 'classnames'
import Link from 'next/link'
import styles from './styles.module.scss'

export interface SubContentProps {
  title: string
  image: string
  url: string
  className?: string
}

export function SubContent({ className, image, url, title }: SubContentProps) {
  return (
    <Link href={url}>
      <a
        className={cn(
          styles.subContent,
          'transition-all ease-in-out duration-500',
          'flex items-center justify-center hover:shadow-2xl shadow-lg overflow-hidden rounded-lg bg-gray-300 relative',
          className,
        )}
      >
        <h2
          className={cn(
            styles.title,
            'transition-all ease-in-out duration-500',
            'heading relative z-20 text-white text-center text-3xl uppercase font-bold',
          )}
        >
          {title}
        </h2>

        <span
          className={cn(
            styles.caption,
            'transition-all ease-in-out duration-500',
            'bg-gray-800',
            'absolute z-10 h-full w-full flex items-center justify-center',
          )}
        ></span>

        <span
          className={cn(
            styles.image,
            'transition-all ease-in-out duration-500',
            'z-0 pointer-events-none absolute block w-full h-full bg-cover bg-center',
          )}
          style={{
            backgroundImage: `url("${image}")`,
          }}
        />
      </a>
    </Link>
  )
}
