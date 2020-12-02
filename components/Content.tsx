import { ReactNode } from 'react'
import { Card } from 'components/Card'
import cn from 'classnames'

interface ContentProps {
  children: ReactNode
  className?: string
}

export function Content({ children, className }: ContentProps) {
  return <Card className={cn('w-4/5 mx-auto', className)}>{children}</Card>
}
