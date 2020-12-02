import Head from 'next/head'
import { Fragment } from 'react'
import { Summary } from 'components/Summary'
import { SubContent } from 'components/SubContents/SubContent'
import { Body } from 'components/Body'
import cn from 'classnames'
import styles from './index.module.scss'

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
            image="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="APLICACIÓN DE HEURÍSTICAS Y REDISEÑO"
            url="/aplicacion-de-heuristicas-y-rediseno"
          />
          <SubContent
            image="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="Fotomontajes"
            url="/fotomontajes"
          />
          <SubContent
            image="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            title="caso de estudio: airbnb"
            url="/caso-de-estudio-airbnb"
            className="col-start-2 row-start-1 row-end-3"
          />
        </Summary>
        <Summary title="Estudios" className="grid-cols-4">
          <SubContent
            title="UI / UX"
            image="/images/ux.jpg"
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
    <div
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
    </div>
  )
}
