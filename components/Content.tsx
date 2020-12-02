import { Fragment, ReactNode } from 'react'
import cn from 'classnames'

export interface ContentProps {
  title: ReactNode
  children: ReactNode
  className?: string
}

export function Content({ title, children, className }: ContentProps) {
  return (
    <div className="my-24">
      <h2 className="py-1 mb-8 uppercase font-medium text-base border-b-4 border-blue-500 w-min">
        {title}
      </h2>
      <div
        className={cn(
          'sub-contents grid grid-cols-2 grid-rows-2 gap-8',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
