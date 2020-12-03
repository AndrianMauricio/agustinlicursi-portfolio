import cn from 'classnames'
import styles from './Picture.module.scss'

export interface PictureProps {
  src?: string
  title?: string
  className?: string
}

export function Picture({ src, title, className, ...props }: PictureProps) {
  return (
    <div
      className={cn(
        styles.picture,
        { 'bg-gray-500': src },
        'rounded-lg shadow-lg overflow-hidden relative',
        className,
      )}
      {...props}
    >
      {title && (
        <div
          className={cn(
            styles.title,
            'transition-all duration-500 ease-in-out',
            'heading text-white uppercase font-medium',
            'flex items-center justify-start',
            'p-10',
            'bg-blue-500 bg-opacity-90 absolute w-full h-20 bottom-0',
          )}
        >
          {title}
        </div>
      )}
      <img className="object-cover w-full h-full" src={src} />
    </div>
  )
}
