import { ReactNode } from 'react'
import cn from 'classnames'

export interface CardProps {
  children: ReactNode
  className?: string
  animate?: boolean
}

export function Card({ children, animate = false, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg shadow-md bg-white p-12',
        {
          ['transform hover:scale-110 hover:z-10 transition duration-300 ease-in-out']: animate,
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
