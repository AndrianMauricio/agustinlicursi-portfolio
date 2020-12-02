import cn from 'classnames'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

export interface SubContentsProps {
  children: ReactNode
  className?: string
}

export function SubContents({ children, className }: SubContentsProps) {
  return (
    <div
      className={cn(
        styles.subContents,
        'sub-contents grid grid-cols-2 grid-rows-2 gap-10',
        className,
      )}
    >
      {children}
    </div>
  )
}
