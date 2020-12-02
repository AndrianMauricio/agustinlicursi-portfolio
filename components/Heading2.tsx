import { ReactNode } from 'react'
import { H2 } from 'components/Heading'

interface Heading2Props {
  children: ReactNode
}

export function Heading2({ children }: Heading2Props) {
  return <H2 className="text-2xl mt-32 mb-8 text-center">{children}</H2>
}
