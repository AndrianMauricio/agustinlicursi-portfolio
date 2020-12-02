import { ReactNode } from 'react'
import cn from 'classnames'

import styles from './HeaderBanner.module.scss'
import { H1 } from 'components/Heading'

export interface HeaderBannerProps {
  children: ReactNode
  image: string
}

export function HeaderBanner({ children, image }: HeaderBannerProps) {
  return (
    <div className="">
      <div
        className={cn(
          styles.headerBanner,
          'flex justify-between items-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto my-12',
        )}
      >
        <H1 className="text-4xl mt-56 mr-12">{children}</H1>
        <img src={image} />
      </div>
    </div>
  )
}
