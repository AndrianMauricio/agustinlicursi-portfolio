import { AppProps } from 'next/app'
import { Fragment } from 'react'
import { Header } from '../components/Header'
import { Body } from '../components/Body'
import { Footer } from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Header />

      <Body>
        <Component {...pageProps} />
      </Body>

      <Footer />
    </Fragment>
  )
}

export default MyApp
