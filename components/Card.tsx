import { ReactNode } from 'react'
import cn from 'classnames'

export interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('rounded-lg shadow-md bg-white p-12', className)}>
      {children}
    </div>
  )
}
