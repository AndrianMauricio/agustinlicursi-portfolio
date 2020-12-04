import { AppProps } from 'next/app'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import '../styles/globals.css'
import { AnimatePresence, motion, AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Header />

      <AnimatePresence exitBeforeEnter>
        <motion.div key={router.route}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </AnimateSharedLayout>
  )
}

export default MyApp
