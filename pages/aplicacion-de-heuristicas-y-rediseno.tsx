import { Body } from 'components/Body'
import { HeaderBanner } from 'components/HeaderBanner'
import { Fragment } from 'react'
import { Card } from 'components/Card'
import { TextSection, ItemsSection } from 'components/Section'
import Head from 'next/head'
import { Images } from 'components/Images'
import { Content } from 'components/Content'
import { Heading2 } from 'components/Heading2'

export default function HeuristicsApplicationAndRedesign() {
  return (
    <Fragment>
      <Head>
        <title>
          Aplicación de Heurísticas y Rediseño | Trabajos | Agustín Licursi
        </title>
      </Head>

      <HeaderBanner image="/images/heuristics-redisign-header.svg">
        Aplicación de Heurísticas y Rediseño
      </HeaderBanner>

      <Body>
        <Card>
          <div className="grid grid-cols-6 gap-12">
            <TextSection title="Desafío" className="col-span-4">
              Rediseñar una aplicación de negocios facilitando su uso e
              intuición. Encontrar técnicas de investigación que no involucren
              usuarios reales y a su vez no cambiar completamente las funciones
              de la misma debido a que los usuarios la usan hace al menos un
              año.
            </TextSection>

            <ItemsSection
              title="Recursos"
              items={
                <Fragment>
                  <div className="bg-blue-500 w-12 h-12 rounded-full"></div>
                  <div className="bg-blue-500 w-12 h-12 rounded-full"></div>
                  <div className="bg-blue-500 w-12 h-12 rounded-full"></div>
                  <div className="bg-blue-500 w-12 h-12 rounded-full"></div>
                </Fragment>
              }
              className="col-span-2"
            />

            <TextSection title="Contexto" className="col-span-4">
              Para reducir las fricciones con las partes interesadas decidí
              realizar un análisis utilizando las reglas heurísticas para que
              pudiesen ver cómo impactaría la tarea de diseñar y dar importancia
              a la experiencia del usuario. Me pareció adecuada la elección de
              las mismas debido a que no es necesario contar con usuarios reales
              y se puede aplicar en etapas tempranas de un proyecto o incluso
              (como en este caso) en una aplicación existente.
            </TextSection>
            <img
              src="/images/creative-process.svg"
              className="col-span-2 mx-auto"
            />
          </div>
        </Card>

        <Heading2>APLICACIÓN DE HEURÍSTICAS</Heading2>
        <Content>
          <p>
            <strong>Hablar el lenguaje del usuario:</strong> el sistema debe
            adaptarse al usuario y este debe entender inmediatamente los
            enunciados y descripciones. Las mismas deben ser simples y concisas.
            Tanto la iconografía como las imagénes del sitio deben ajustarse en
            la medida de lo posible al modelo mental de nuestros usuarios y
            cumplir su función en relación a ello.
          </p>
        </Content>
        <Images>
          <div className="bg-gray-500 rounded-lg shadow-lg mx-28"></div>
        </Images>

        <Content>
          <p>
            <strong>Prevenir y ofrecer manejo de errores:</strong> preferir la
            selección antes que el tipeo libre, autocompletar campos, realizar
            validaciones, preferiendo mostrar las mismas antes de finalizar el
            proceso, de modo que el usuario no pierda tiempo escribiendo.
          </p>
        </Content>
        <Images>
          <div className="bg-gray-500 rounded-lg shadow-lg mx-28"></div>
        </Images>

        <Content>
          <div className="grid gap-8">
            <p>
              <strong>Ayudar a los usuarios ante los errores:</strong> cada
              error debe decir que ocurrió y que se debe hacer para resolverlo.
            </p>
            <div className="grid gap-8 grid-cols-2 mx-16">
              <div className="flex gap-4 flex-col">
                <p>
                  <i>Mensajes de error en los siguientes casos:</i>
                </p>
                <p>
                  En la cola de procesos al finalizar la carga de un archivo,
                  informando en detalle los errores ocurridos.
                </p>
                <p>
                  Al procesar si un archivo es incompatible en cuanto al formato
                  o no sigue los lineamientos de la estructura del template.
                </p>
                <p>
                  En caso de que el servidor no funcione o el usuario no cuenta
                  con conexión a Internet.
                </p>
              </div>
              <div className="bg-gray-500 rounded-lg shadow-lg"></div>
            </div>
          </div>
        </Content>

        <Heading2>REDISEÑO TENTATIVO</Heading2>
        <Content>
          <p>
            <strong>Hablar el lenguaje del usuario:</strong> el sistema debe
            adaptarse al usuario y este debe entender inmediatamente los
            enunciados y descripciones. Las mismas deben ser simples y concisas.
            Tanto la iconografía como las imagénes del sitio deben ajustarse en
            la medida de lo posible al modelo mental de nuestros usuarios y
            cumplir su función en relación a ello.
          </p>
        </Content>
        <Images>
          <div className="bg-gray-500 rounded-lg shadow-lg mx-28"></div>
        </Images>
        <Images>
          <div className="bg-gray-500 rounded-lg shadow-lg mx-28"></div>
        </Images>

        <Content>
          <p>
            <strong>Hablar el lenguaje del usuario:</strong> el sistema debe
            adaptarse al usuario y este debe entender inmediatamente los
            enunciados y descripciones. Las mismas deben ser simples y concisas.
            Tanto la iconografía como las imagénes del sitio deben ajustarse en
            la medida de lo posible al modelo mental de nuestros usuarios y
            cumplir su función en relación a ello.
          </p>
        </Content>
        <Images>
          <div className="bg-gray-500 rounded-lg shadow-lg mx-28"></div>
        </Images>
      </Body>
    </Fragment>
  )
}
