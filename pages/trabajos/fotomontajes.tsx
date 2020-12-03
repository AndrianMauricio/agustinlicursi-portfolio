import { Body } from 'components/Body'
import { HeaderBanner } from 'components/HeaderBanner'
import { Fragment } from 'react'
import Head from 'next/head'

export default function Photomontage() {
  return (
    <Fragment>
      <Head>
        <title>Fotomontajes | Trabajos | Agustín Licursi</title>
      </Head>

      <HeaderBanner image="/images/photomontage.svg">Fotomontajes</HeaderBanner>

      <Body>
        <Photo
          name="Foto 1"
          urlLeft="/images/photomontage/photo-1-process.png"
          urlRight="/images/photomontage/photo-1-final.png"
        />

        <Photo
          name="Foto 2"
          urlLeft="/images/photomontage/photo-2-process.png"
          urlRight="/images/photomontage/photo-2-final.png"
        />

        <Photo
          name="Foto 3"
          urlLeft="/images/photomontage/photo-3-process.png"
          urlRight="/images/photomontage/photo-3-final.png"
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
