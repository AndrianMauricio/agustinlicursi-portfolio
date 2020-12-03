import { Body } from 'components/Body'
import { HeaderBanner } from 'components/HeaderBanner'
import { Fragment } from 'react'
import { Card } from 'components/Card'
import Head from 'next/head'

export default function AboutMe() {
  return (
    <Fragment>
      <Head>
        <title>Sobre Mi | Agustín Licursi</title>
      </Head>

      <HeaderBanner image="/images/about-me.svg">Sobre Mí</HeaderBanner>

      <Body>
        <Card>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold heading text-2xl mb-12">
                  Construyamos algo juntos.
                </h2>
                <p className="my-8">
                  Me llamo Agustín, quizás ya lo sepas si echaste un vistazo a
                  mi portfolio. Vivo en Buenos Aires hace 3 años, pero nací en
                  Corrientes Capital. Actualmente estoy trabajando diariamente
                  para mejorar mi perfil como UX Designer, tomando diversos
                  cursos y reforzando mi conocimiento, esto mismo me perfila
                  como un adicto a los Black Friday en Domestika.
                </p>
                <p className="my-8">
                  Soy detallista, organizado, de los que tienen su playlist
                  actualizada y un archivo con películas ordenadas por fecha.
                  Siempre dispuesto a viajar, siempre dispuesto a conocer. Me
                  agradan los ambientes en donde se da valor al aprendizaje y se
                  persiga la mejora constante.
                </p>
                <p className="my-8">
                  Ese es mi desafío día a día, no limitarme, no ver las
                  barreras.
                </p>
              </div>
              <div className="w-80 h-80 flex-shrink-0 ml-48">
                <img
                  src="/images/profile.png"
                  alt="Imágen de perfil"
                  className=""
                />
              </div>
            </div>
            <div>
              <a
                href="https://drive.google.com/file/d/1YwDVtha_aO1lJ0rnLjh4XppVg_2OIi34/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center w-40 h-12 bg-blue-500 text-white heading font-bold text-lg rounded-md"
              >
                CV
              </a>
            </div>
          </div>
        </Card>
      </Body>
    </Fragment>
  )
}
