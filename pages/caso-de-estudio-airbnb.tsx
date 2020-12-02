import { Body } from 'components/Body'
import { HeaderBanner } from 'components/HeaderBanner'
import { Fragment } from 'react'
import { Card } from 'components/Card'
import { TextSection, ItemsSection } from 'components/Section'
import Head from 'next/head'
import { Images } from 'components/Images'
import { Content } from 'components/Content'
import { Heading2 } from 'components/Heading2'

export default function AirbnbStudyCase() {
  return (
    <Fragment>
      <Head>
        <title>Caso de Estudio: Airbnb | Trabajos | Agustín Licursi</title>
      </Head>

      <HeaderBanner image="/images/airbnb-case-header.svg">
        Caso de Estudio: Airbnb
      </HeaderBanner>

      <Body>
        <Card>
          <div className="grid grid-cols-6 gap-12">
            <TextSection
              title="Contexto"
              children="Análisis del sitio web de Airbnb aplicando todos los conocimientos adquiridos en el curso de Experto en Experiencia de Usuario e Interacciones de la UTN, mediante la realización de dos entregas con carácter obligatorio y calificable."
              className="col-span-4"
            />
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
          </div>
        </Card>

        <Heading2>PRINCIPIOS DE DISEÑO Y PERCEPCIÓN VISUAL</Heading2>
        <Content>
          <p>
            Para acentuar el hecho que el diseño de UX no es sólo estética me
            basé en algunos lineamientos en lo que se refiere a patrones de
            diseño, aplicando y analizando el sitio web mediante la Teoría de la
            Gestalt.
          </p>
        </Content>
        <Images className="grid-cols-2" height="36rem">
          <div className="bg-gray-500 rounded-lg shadow-lg  ml-28"></div>
          <div className="bg-gray-500 rounded-lg shadow-lg  mr-28"></div>
        </Images>

        <Heading2>USABILIDAD Y REGLAS HEURÍSTICAS</Heading2>
        <Content>
          <p>
            A modo de detección en cuanto a los problemas de usabilidad opté por
            aplicar las reglas heurísticas para evaluar e inspeccionar el
            cumplimiento de las mismas.
          </p>
        </Content>
        <Images className="grid-cols-1">
          <div className="bg-gray-500 rounded-lg shadow-lg mx-28"></div>
        </Images>

        <Heading2>ARQUITECTURA DE LA INFORMACIÓN</Heading2>
        <Content>
          <p>
            Entendiendo a la arquitectura del sitio como híbrida, es decir,
            tanto ancha como profunda, decidí realizar un CARD SORTING a 5
            personas para evidenciar un mínimo resultado acerca de las
            diferencias de los modelos mentales de los usuarios. Seleccioné 3
            categorías pudiendo los usuarios agregar otras, resultando así un
            Card Sorting híbrido valiéndome de la herramienta Optimal Workshop.
          </p>
        </Content>
        <Images className="grid-cols-2" height="20rem">
          <div className="bg-gray-500 rounded-lg shadow-lg  ml-28"></div>
          <div className="bg-gray-500 rounded-lg shadow-lg  mr-28"></div>
        </Images>

        <Heading2>PERSONAS</Heading2>
        <Content>
          <p>
            Para definir a los proto usuarios o personas inicié mi investigación
            mediante entrevistas y encuestas a un grupo de personas con
            diferentes edades, profesiones e intereses. Mediante esta
            información con el afán de poder saber qué y cómo piensan los
            usuarios creé 3 personas englobando 3 tipos de usuarios.
          </p>
        </Content>
        <Images className="grid-cols-2 grid-rows-3" height="60rem">
          <div className="bg-gray-500 rounded-lg shadow-lg  ml-28"></div>
          <div className="bg-gray-500 rounded-lg shadow-lg  mr-28"></div>
          <div className="row-start-2 row-end-4 col-start-1 col-end-3 bg-gray-500 rounded-lg shadow-lg mx-28"></div>
        </Images>

        <Heading2>CUSTOMER JOURNEY MAP</Heading2>
        <Content>
          <p>
            Finalmente desarrollé la representación visual de la experiencia de
            uno de los usuarios entrevistados en su interacción con los
            distintos puntos de contacto, desde el ingreso al sitio a la
            coordinación de la entrega de las llaves.
          </p>
        </Content>
        <Images height="40rem">
          <div className="bg-gray-500 rounded-lg shadow-lg mx-28"></div>
        </Images>
      </Body>
    </Fragment>
  )
}
