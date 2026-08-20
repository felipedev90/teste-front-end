import CrownSimple from '@/assets/icons/CrownSimple.svg'

export type NavItem = {
  label: string
  href: string
  active?: boolean
  icon?: string
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'TODAS CATEGORIAS', href: '#' },
  { label: 'SUPERMERCADO', href: '#' },
  { label: 'LIVROS', href: '#' },
  { label: 'MODA', href: '#' },
  { label: 'LANÇAMENTOS', href: '#' },
  { label: 'OFERTAS DO DIA', href: '#', active: true },
  { label: 'ASSINATURA', href: '#', icon: CrownSimple },
]
