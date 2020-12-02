import { Fragment } from 'react'

import Head from 'next/head'
import { Body } from 'components/Body'

export default function AboutMe() {
  return (
    <Fragment>
      <Head>
        <title>Sobre Mi</title>
      </Head>
      <Body>
        <div>Sobre Mi</div>
      </Body>
    </Fragment>
  )
}
