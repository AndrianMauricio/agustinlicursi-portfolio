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

      <HeaderBanner image="/images/studies.svg">Estudios</HeaderBanner>

      <Body>
        <Carreer title="UI/UX">
          <Study
            image="/images/logos/utn.png"
            title="Experto en Diseño de Experiencias de Usuario e Interacciones"
            place="UTN E - Learning"
            year="2020"
          />
          <Study
            image="/images/logos/domestika.png"
            title="Producción de Videojuegos con Métodos UX"
            place="Domestika"
            year="2020"
          />
          <Study
            image="/images/logos/educacion-it.jpg"
            title="Introducción a UX"
            place="Educación IT"
            year="2020"
          />
        </Carreer>

        <Carreer title="MARKETING">
          <Study
            image="/images/logos/educacion-it.jpg"
            title="Introducción al Marketing Digital"
            place="Educación IT"
            year="2020"
          />
          <Study
            image="/images/logos/educacion-it.jpg"
            title="Marketing de Contenido y Viralización"
            place="Educación IT"
            year="2020"
          />
          <Study
            image="/images/logos/college.png"
            title="Tecnicatura Superior en Administración"
            place="Instituto Superior Misericordia"
            year="2012 - 2014"
          />
        </Carreer>

        <Carreer title="FOTOGRAFÍA Y VIDEO">
          <Study
            image="/images/logos/domestika.png"
            title="Introducción a Photoshop"
            place="Domestika"
            year="2020"
          />
        </Carreer>

        <Carreer title="METODOLOGÍAS DE TRABAJO">
          <Study
            image="/images/logos/crehana.png"
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
  image: string
  title: string
  place: string
  year: string
}

function Study({ title, place, year, image }: StudyProps) {
  return (
    <Card animate>
      <div className="flex items-center gap-8">
        <div className="bg-blue-50 w-24 h-24 rounded-full flex-shrink-0 overflow-hidden">
          <img src={image} className="object-fill w-full h-full" />
        </div>
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
