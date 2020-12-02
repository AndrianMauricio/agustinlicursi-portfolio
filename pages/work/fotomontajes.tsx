import { Body } from 'components/Body'
import { HeaderBanner } from 'components/HeaderBanner'
import { Fragment } from 'react'
import { Card } from 'components/Card'
import { TextSection, ItemsSection } from 'components/Section'
import Head from 'next/head'
import { Images } from 'components/Images'
import { Content } from 'components/Content'
import { Heading2 } from 'components/Heading2'

export default function Photomontage() {
  return (
    <Fragment>
      <Head>
        <title>Fotomontajes | Trabajos</title>
      </Head>

      <HeaderBanner image="/images/photomontage.svg">Fotomontajes</HeaderBanner>

      <Body>
        <Photo
          name="Foto 1"
          urlLeft="/images/photo-1-steps.jpg"
          urlRight="/images/photo-1-final.jpg"
        />

        <Photo
          name="Foto 2"
          urlLeft="/images/photo-2-steps.jpg"
          urlRight="/images/photo-2-final.jpg"
        />

        <Photo
          name="Foto 3"
          urlLeft="/images/photo-3-steps.jpg"
          urlRight="/images/photo-3-final.jpg"
        />
      </Body>
    </Fragment>
  )
}

interface PhotoProps {
  name: string
  urlLeft: string
  urlRight: string
}

function Photo({ name, urlLeft, urlRight }: PhotoProps) {
  return (
    <div className="grid grid-cols-2 rounded-lg mb-20 overflow-hidden shadow-lg">
      <img src={urlLeft} alt={`Proceso de ${name}`} className="w-full h-auto" />
      <img
        src={urlRight}
        alt={`Versión final de ${name}`}
        className="w-full h-auto"
      />
    </div>
  )
}
