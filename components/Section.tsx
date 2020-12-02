import { H2 } from 'components/Heading'
import { ReactNode } from 'react'
import cn from 'classnames'

export interface SectionProps {
  title: string
  className?: string
  children: ReactNode
}

export function Section({ title, className, children }: SectionProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <H2 className="uppercase mb-6">{title}</H2>
      {children}
    </div>
  )
}

export interface TextSectionProps extends Omit<SectionProps, 'children'> {
  children: string
}

export function TextSection({ title, children, className }: TextSectionProps) {
  return (
    <Section title={title} className={className}>
      <p>{children}</p>
    </Section>
  )
}

export interface ItemsSectionProps extends Omit<SectionProps, 'children'> {
  items: ReactNode
}

export function ItemsSection({ title, className, items }: ItemsSectionProps) {
  return (
    <Section title={title} className={className}>
      <div className="flex justify-around">{items}</div>
    </Section>
  )
}
