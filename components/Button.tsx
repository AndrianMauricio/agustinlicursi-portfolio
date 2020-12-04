import Link from 'next/link'
import { ReactNode } from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

export interface ButtonProps {
  children: ReactNode
  className?: string
  link?: string
  external?: boolean
}

export function Button({ children, link, className, external }: ButtonProps) {
  const _className = cn(
    styles.button,
    'bg-blue-500 py-2 px-8 text-white font-bold rounded-md inline-block text-center',
    className,
  )

  if (link != null) {
    if (external) {
      return (
        <Link href={link}>
          <a target="_blank" rel="noopener" className={_className}>
            {children}
          </a>
        </Link>
      )
    }

    return (
      <a href={link} className={_className}>
        {children}
      </a>
    )
  }

  return <button className={_className}>{children}</button>
}
