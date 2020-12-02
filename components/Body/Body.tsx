import styles from './styles.module.scss'

export interface BodyProps {
  children: import('react').ReactNode
}

export function Body({ children }: BodyProps) {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentBlock}>{children}</div>
    </div>
  )
}
