import { Body } from 'components/Body'
import { HeaderBanner } from 'components/HeaderBanner'
import { Fragment } from 'react'
import { Card } from 'components/Card'
import { TextSection, ItemsSection, Item } from 'components/Section'
import Head from 'next/head'
import { Images } from 'components/Images'
import { Content } from 'components/Content'
import { Heading2 } from 'components/Heading2'
import { Picture } from 'components/Picture'

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
                  <Item
                    src="/images/logos/optimal-workshop.svg"
                    name="Optimal Workshop"
                    href="https://www.optimalworkshop.com/"
                  />
                  <Item
                    src="/images/logos/encuesta.png"
                    name="Encuesta.com"
                    href="https://encuesta.com/"
                  />
                  <Item src="/images/logos/photoshop.png" name="Photoshop" />
                  <Item src="/images/logos/powerpoint.png" name="PowerPoint" />
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
        <Images className="grid-cols-2" height="31rem">
          <Picture
            src="/images/airbnb/principio-de-proximidad.png"
            title="PRINCIPIO DE PROXIMIDAD"
            className="ml-28"
          />
          <Picture
            src="/images/airbnb/principio-de-figura-y-fondo.png"
            title="PRINCIPIO DE FONDO Y FIGURA"
            className="mr-28"
          />
        </Images>

        <Heading2>USABILIDAD Y REGLAS HEURÍSTICAS</Heading2>
        <Content>
          <p>
            A modo de detección en cuanto a los problemas de usabilidad opté por
            aplicar las reglas heurísticas para evaluar e inspeccionar el
            cumplimiento de las mismas.
          </p>
        </Content>
        <Images className="grid-cols-2 grid-rows-2" height="31rem">
          <Picture
            title="HABLAR EL LENGUAJE DEL USUARIO"
            src="/images/airbnb/lenguaje-de-los-usuarios.png"
            className="row-span-2 ml-28"
          />

          <Picture
            title="VISIBILIDAD DE ESTADO DEL SISTEMA"
            src="/images/airbnb/visibilidad-de-estado.png"
            className="mr-28"
          />

          <Picture
            title="Ayuda y documentación"
            src="/images/airbnb/ayuday-doc.png"
            className="mr-28"
          />
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
        <Images className="grid-cols-2" height="16rem">
          <Picture src="/images/airbnb/cardsorting01.png" className="ml-28" />
          <Picture src="/images/airbnb/cardsorting02.png" className="mr-28" />
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
        <Images className="grid-cols-2 grid-rows-3" height="55rem">
          <Picture src="/images/airbnb/persona-02.svg" className="" />
          <Picture src="/images/airbnb/persona-03.svg" className="" />
          <Picture
            src="/images/airbnb/persona-01.svg"
            className="row-span-2 col-span-2"
          />
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
        <Images height="32rem">
          <Picture src="/images/airbnb/journeymap.png" className="mx-28" />
        </Images>
      </Body>
    </Fragment>
  )
}
