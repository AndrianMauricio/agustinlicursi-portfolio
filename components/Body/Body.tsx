import styles from './styles.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { transition } from 'utils'

export interface BodyProps {
  children: import('react').ReactNode
}

export function Body({ children }: BodyProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className={cn(styles.contentContainer, 'my-20')}
    >
      <div className={styles.contentBlock}>{children}</div>
    </motion.div>
  )
}
