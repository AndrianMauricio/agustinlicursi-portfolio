import { ReactNode } from 'react'
import cn from 'classnames'

interface ImagesProps {
  children: ReactNode
  className?: string
  height?: string
}

export function Images({ className, height = '36rem', ...props }: ImagesProps) {
  return (
    <div
      style={{ height }}
      className={cn('grid gap-8 w-4/5 my-8 mx-auto', className)}
      {...props}
    />
  )
}
