import { ReactNode } from 'react'
import cn from 'classnames'

import styles from './HeaderBanner.module.scss'
import { H1 } from 'components/Heading'
import { motion } from 'framer-motion'
import { transition } from 'utils'

export interface HeaderBannerProps {
  children: ReactNode
  image?: string
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
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: '-50vw' }}
          exit={{ opacity: 0, x: '-50vw' }}
          transition={transition}
          className="mt-56 mr-12"
        >
          <H1 className="text-4xl">{children}</H1>
        </motion.div>

        {image && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: '50vw' }}
            exit={{ opacity: 0, x: '50vw' }}
            transition={transition}
            className="h-full max-h-96"
          >
            <img src={image} className="h-full max-h-96" />
          </motion.div>
        )}
      </div>
    </div>
  )
}
