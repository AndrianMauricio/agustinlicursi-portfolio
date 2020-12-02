import cn from 'classnames'

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
    <a
      href={url}
      className={cn([
        'sub-content',
        'flex',
        'items-end',
        'p-2',
        'overflow-hidden',
        'rounded-lg',
        'bg-gray-300',
        'relative',
        className,
      ])}
    >
      {details && (
        <span className="caption z-10 flex flex-col gap-3 bg-white rounded p-3 w-full bg-opacity-90 transition-all duration-500 ease-in-out">
          <span className="text-sm uppercase">{details.tags.join(' / ')}</span>
          <span className="ubuntu text-xl uppercase font-medium">
            {details.title}
          </span>
          <span className="ubuntu text-base font-bold bg-blue-500 hover:bg-blue-800 transition-all duration-500 ease-in-out rounded-md text-white flex items-center justify-center uppercase w-16 h-8">
            Ver
          </span>
        </span>
      )}

      <span
        className="image -m-2 pointer-events-none absolute block w-full h-full bg-cover bg-center transition-all ease-in-out duration-1000"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      />
    </a>
  )
}
