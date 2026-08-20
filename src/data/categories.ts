import Tech from '@/assets/icons/Tech.webp'
import Supermercados from '@/assets/icons/Supermercados.webp'
import Whiskey from '@/assets/icons/Whiskey.webp'
import Ferramentas from '@/assets/icons/Ferramentas.webp'
import CuidadosDeSaude from '@/assets/icons/CuidadosDeSaude.webp'
import Corrida from '@/assets/icons/Corrida.webp'
import Moda from '@/assets/icons/Moda.webp'

export type Category = {
  name: string
  icon: string
  active?: boolean
}

export const CATEGORIES: readonly Category[] = [
  { name: 'Tecnologia', icon: Tech, active: true },
  { name: 'Supermercado', icon: Supermercados },
  { name: 'Bebidas', icon: Whiskey },
  { name: 'Ferramenta', icon: Ferramentas },
  { name: 'Saúde', icon: CuidadosDeSaude },
  { name: 'Esportes e Fitness', icon: Corrida },
  { name: 'Moda', icon: Moda },
]
