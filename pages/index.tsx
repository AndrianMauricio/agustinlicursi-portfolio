import Head from 'next/head'
import React, { Fragment } from 'react'
import { Summary } from 'components/Summary'
import { SubContent } from 'components/SubContents/SubContent'
import { Body } from 'components/Body'
import cn from 'classnames'
import styles from './index.module.scss'
import { motion } from 'framer-motion'
import { transition } from 'utils'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Trabajos | Agustín Licursi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />

      <Body>
        <Summary title="Proyectos">
          <SubContent
            image="/images/heuristics-redesign.png"
            title="APLICACIÓN DE HEURÍSTICAS Y REDISEÑO"
            url="/trabajos/aplicacion-de-heuristicas-y-rediseno"
          />
          <SubContent
            image="/images/photomontage/photo-3-final.png"
            title="Fotomontajes"
            url="/trabajos/fotomontajes"
          />
          <SubContent
            image="/images/airbnb-case-study.jpg"
            title="caso de estudio: airbnb"
            url="/trabajos/caso-de-estudio-airbnb"
            className="col-start-2 row-start-1 row-end-3"
          />
        </Summary>
        <Summary title="Estudios" className="grid-cols-4">
          <SubContent
            title="UI / UX"
            image="/images/ux-ui.png"
            url="/estudios"
            className="col-start-1 col-end-3 row-start-1 row-end-3"
          />
          <SubContent
            title="FOTOGRAFÍA Y VIDEO"
            image="/images/photo-video.jpg"
            url="/estudios"
            className="col-start-3 col-end-5 row-start-1 row-end-2"
          />
          <SubContent
            title="METODOLOGÍAS"
            image="/images/scrum.jpg"
            url="/estudios"
            className="row-start-2 col-start-3 col-end-4"
          />
          <SubContent
            title="marketing"
            image="/images/marketing.jpg"
            url="/estudios"
            className="row-start-2 col-start-4 col-end-5"
          />
        </Summary>{' '}
      </Body>
    </Fragment>
  )
}

function Banner() {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 'calc(-100% - 64px)', opacity: 0 }}
      exit={{ y: 'calc(-100% - 64px)', opacity: 0 }}
      transition={transition}
      className={cn(
        styles.imageBanner,
        'bg-cover bg-center grid grid-cols-2 grid-rows-1',
      )}
    >
      <h2 className="heading flex items-center justify-center text-4xl text-center font-bold text-white">
        Hola, me llamo Agustín:
        <br />
        UI/UX Designer.
      </h2>
    </motion.div>
  )
}
