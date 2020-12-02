import { Body } from 'components/Body'
import { HeaderBanner } from 'components/HeaderBanner'
import { Fragment, ReactNode } from 'react'
import { Card } from 'components/Card'
import Head from 'next/head'

export default function Studies() {
  return (
    <Fragment>
      <Head>
        <title>Estudios | Agustín Licursi</title>
      </Head>

      <HeaderBanner image="/images/airbnb-case-header.svg">
        Estudios
      </HeaderBanner>

      <Body>
        <Carreer title="UI/UX">
          <Study
            title="Experto en Diseño de Experiencias de Usuario e Interacciones"
            place="UTN E - Learning"
            year="2020"
          />
          <Study
            title="Producción de Videojuegos con Métodos UX"
            place="UTN E - Learning"
            year="2020"
          />
          <Study
            title="Experto en Diseño de Experiencias de Usuario e Interacciones"
            place="UTN E - Learning"
            year="2020"
          />
          <Study
            title="Introducción a UX"
            place="UTN E - Learning"
            year="2020"
          />
        </Carreer>

        <Carreer title="MARKETING">
          <Study
            title="Introducción al Marketing Digital"
            place="Educación IT"
            year="2020"
          />
          <Study
            title="Marketing de Contenido y Viralización"
            place="Educación IT"
            year="2020"
          />
          <Study
            title="Tecnicatura Superior en Administración"
            place="Instituto Superior Misericordia"
            year="2012 - 2014"
          />
        </Carreer>

        <Carreer title="FOTOGRAFÍA Y VIDEO">
          <Study
            title="Introducción a Photoshop"
            place="Domestika"
            year="2020"
          />
        </Carreer>

        <Carreer title="METODOLOGÍAS DE TRABAJO">
          <Study
            title="SCRUM: Gestionando equipos de trabajo"
            place="Crehana"
            year="2020"
          />
        </Carreer>
      </Body>
    </Fragment>
  )
}

interface HeadingProps {
  children: ReactNode
}

function Heading({ children }: HeadingProps) {
  return <h2 className="text-3xl font-bold mb-8">{children}</h2>
}

interface StudyProps {
  // image: string
  title: string
  place: string
  year: string
}

function Study({ title, place, year }: StudyProps) {
  return (
    <Card>
      <div className="flex items-center gap-8">
        <div className="bg-blue-500 w-24 h-24 rounded-full flex-shrink-0" />
        <div className="flex flex-col gap-2">
          <p className="heading font-bold text-lg">{title}</p>
          <p className="text-gray-400">{place}</p>
          <p className="">{year}</p>
        </div>
      </div>
    </Card>
  )
}

interface CarreerProps {
  children: ReactNode
  title: string
}

function Carreer({ children, title }: CarreerProps) {
  return (
    <Fragment>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-2 gap-8 mb-28">{children}</div>
    </Fragment>
  )
}
