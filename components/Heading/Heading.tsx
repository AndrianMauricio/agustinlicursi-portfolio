import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Heading.module.scss'

export interface HeadingsProps {
  className?: string
  children: ReactNode
}

const baseClassNames = 'heading font-bold'

export function H1({ className, children }: HeadingsProps) {
  return (
    <h1 className={cn(styles.h1, baseClassNames, className)}>{children}</h1>
  )
}

export function H2({ className, children }: HeadingsProps) {
  return (
    <h2 className={cn(styles.h1, baseClassNames, className)}>{children}</h2>
  )
}
