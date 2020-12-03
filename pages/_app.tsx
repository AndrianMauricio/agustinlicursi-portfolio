import { AppProps } from 'next/app'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment } from 'react'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Fragment>
      <Header />

      <AnimatePresence>
        <motion.div
          key={router.route}
          initial="enter"
          animate="exit"
          exit="enter"
          variants={{
            enter: {
              opacity: 0,
            },
            exit: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </Fragment>
  )
}

export default MyApp
