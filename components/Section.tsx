import { ReactNode } from 'react'
import { SubContents } from './SubContents/SubContents'

export interface SectionProps {
  title: ReactNode
  children: ReactNode
  className?: string
}

export function Section({ title, children, className }: SectionProps) {
  return (
    <div className="my-24">
      <h2 className="heading py-1 mb-12 uppercase font-bold text-3xl border-b-4 border-blue-500 w-min">
        {title}
      </h2>
      <SubContents className={className}>{children}</SubContents>
    </div>
  )
}
