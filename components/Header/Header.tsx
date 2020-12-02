import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header>
      <Navigation />
      <Banner />
    </header>
  )
}

function Navigation() {
  return (
    <div className="sticky top-0 bg-gray-800 flex justify-between items-center py-4 px-6">
      <Logo />
      <Menu />
    </div>
  )
}

function Banner() {
  return (
    <div
      className={cn(
        styles.imageBanner,
        'bg-cover bg-center grid grid-cols-2 grid-rows-1 h-96',
      )}
    >
      <h2 className="heading flex items-center justify-center text-4xl text-center font-bold text-white">
        Hola, me llamo Agustín:
        <br />
        UI/UX Designer.
      </h2>
    </div>
  )
}

function Logo() {
  return (
    <Link href="/">
      <a title="Inicio" className="flex items-center justify-center">
        <img
          src="https://seeklogo.com/images/M/microsoft-edge-new-2020-logo-2AD376EBAA-seeklogo.com.png"
          alt="Logo"
          className="w-8 h-8 mr-2"
        />
        <h1 className="text-xl text-white">Agustín Licursi</h1>
      </a>
    </Link>
  )
}

function Menu() {
  return (
    <ul className="grid grid-flow-col gap-8 text-xs uppercase">
      <MenuLink href="/" label="Inicio" title="Home" />

      <MenuLink href="/work" label="Trabajos" title="Work" />

      <MenuLink href="/studies" label="Estudios" title="Studies" />

      <MenuLink href="/about-me" label="Sobre Mi" title="About Me" />
    </ul>
  )
}

interface MenuLink {
  href: string
  label: string
  title: string
}

function MenuLink({ href, label, title }: MenuLink) {
  const router = useRouter()

  return (
    <li
      className={cn(
        'heading py-1 font-bold text-sm text-white flex items-center border-b-4 transition-all duration-500 ease-in-out',
        router.pathname === href ? 'border-blue-500' : 'border-transparent',
      )}
    >
      <Link href={href}>
        <a title={title}>{label}</a>
      </Link>
    </li>
  )
}
