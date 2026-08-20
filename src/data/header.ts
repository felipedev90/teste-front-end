import CrownSimple from '@/assets/icons/CrownSimple.svg'
import Group from '@/assets/icons/Group.svg'
import Heart from '@/assets/icons/Heart.svg'
import UserCircle from '@/assets/icons/UserCircle.svg'
import ShoppingCart from '@/assets/icons/ShoppingCart.svg'

export type NavItem = {
  label: string
  href: string
  active?: boolean
  icon?: string
}

export type HeaderAction = {
  label: string
  icon: string
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

export const HEADER_ACTIONS: readonly HeaderAction[] = [
  { label: 'Meus Pedidos', icon: Group },
  { label: 'Favoritos', icon: Heart },
  { label: 'Perfil', icon: UserCircle },
  { label: 'Carrinho', icon: ShoppingCart },
]
