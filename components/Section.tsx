import { H2 } from 'components/Heading'
import { ReactNode } from 'react'
import cn from 'classnames'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

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

export interface ItemProps {
  src: string
  name?: string
  href?: string
}

export function Item({ src, href, name }: ItemProps) {
  const Tag = href ? 'a' : 'div'

  const content = (
    <Tag
      className="bg-blue-50 w-12 h-12 rounded-full overflow-hidden"
      {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
    >
      <img src={src} className="object-fill w-full h-full" />
    </Tag>
  )

  return name ? (
    <Tippy arrow={false} placement="bottom" content={name}>
      {content}
    </Tippy>
  ) : (
    content
  )
}
