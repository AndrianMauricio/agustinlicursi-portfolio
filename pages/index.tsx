import Head from 'next/head'
import { Fragment } from 'react'
import { Content } from '../components/Content'
import { SubContent } from '../components/SubContent'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Agustín Licursi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content title="Proyectos">
        <SubContent
          image="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          details={{
            tags: ['Heurísticas', 'Figma'],
            title: 'Aplicación de Heurísticas y Rediseño',
          }}
          url="#"
        />
        <SubContent
          image="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          details={{
            tags: ['Photoshop', 'Illustrator'],
            title: 'Fotomontajes',
          }}
          url="#"
        />
        <SubContent
          image="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          details={{
            tags: [
              'Heurísticas',
              'Gestalt',
              'Card Sorting',
              'Personas',
              'Journey Map',
            ],
            title: 'Caso de Estudio: Airbnb',
          }}
          url="#"
          className="col-start-2 row-start-1 row-end-3"
        />
      </Content>

      <Content title="Estudios" className="grid-cols-4">
        <SubContent
          image="https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          url="#"
          className="col-start-1 col-end-3 row-start-1 row-end-3"
        />
        <SubContent
          image="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          url="#"
          className="col-start-3 col-end-5 row-start-1 row-end-2"
        />
        <SubContent
          image="https://images.pexels.com/photos/4384147/pexels-photo-4384147.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          url="#"
          className="row-start-2 col-start-3 col-end-4"
        />
        <SubContent
          image="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          url="#"
          className="row-start-2 col-start-4 col-end-5"
        />
      </Content>
    </Fragment>
  )
}
