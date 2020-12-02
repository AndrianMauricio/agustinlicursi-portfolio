import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

export function Header() {
  return (
    <header className="mt-16">
      <Navigation />
    </header>
  )
}

function Navigation() {
  return (
    <div className="fixed z-20 w-screen top-0 bg-gray-800 flex justify-between items-center py-4 px-6">
      <Logo />
      <Menu />
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
      <MenuLink href="/" label="Trabajos" title="Trabajos" exact />

      <MenuLink href="/studies" label="Estudios" title="Estudios" />

      <MenuLink href="/about-me" label="Sobre Mi" title="Sobre Mi" />
    </ul>
  )
}

interface MenuLink {
  href: string
  label: string
  title: string
  exact?: boolean
}

function MenuLink({ href, label, title, exact = false }: MenuLink) {
  const router = useRouter()

  const isActive = exact
    ? router.pathname === href
    : router.pathname.includes(href)

  return (
    <li
      className={cn(
        'heading py-1 font-bold text-sm text-white flex items-center border-b-4 transition-all duration-500 ease-in-out',
        isActive ? 'border-blue-500' : 'border-transparent',
      )}
    >
      <Link href={href}>
        <a title={title}>{label}</a>
      </Link>
    </li>
  )
}
