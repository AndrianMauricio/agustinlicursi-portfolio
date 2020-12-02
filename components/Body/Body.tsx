import styles from './styles.module.scss'
import cn from 'classnames'

export interface BodyProps {
  children: import('react').ReactNode
}

export function Body({ children }: BodyProps) {
  return (
    <div className={cn(styles.contentContainer, 'my-20')}>
      <div className={styles.contentBlock}>{children}</div>
    </div>
  )
}
