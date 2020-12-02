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

      <HeaderBanner image="/images/airbnb-case-header.svg">
        Sobre Mi
      </HeaderBanner>

      <Body>
        <Card>
          <div className="flex flex-col justify-between">
            <div className="flex justify-between">
              <div>
                <h2 className="font-bold heading text-2xl mb-8">
                  Construyamos algo juntos.
                </h2>
                <p>
                  Para reducir las fricciones con las partes interesadas decidí
                  realizar un análisis utilizando las reglas heurísticas para
                  que pudiesen ver cómo impactaría la tarea de diseñar y dar
                  importancia a la experiencia del usuario. Me pareció adecuada
                  la elección de las mismas debido a que no es necesario contar
                  con usuarios reales y se puede aplicar en etapas tempranas de
                  un proyecto o incluso (como en este caso) en una aplicación
                  existente.
                </p>
              </div>
              <div className="bg-blue-500 w-80 h-80 rounded-full flex-shrink-0 ml-48"></div>
            </div>
            <div>
              <a
                href="#"
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
