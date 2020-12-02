import { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </Fragment>
  )
}

export default MyApp
