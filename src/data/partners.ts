import parceiros from '@/assets/images/parceiros.webp'

export type Partner = {
  id: number
  title: string
  description: string
  image: string
}

export const PARTNERS: readonly Partner[] = [
  {
    id: 1,
    title: 'Parceiros',
    description: 'Seja nosso parceiro e aproveite os benefícios exclusivos.',
    image: parceiros,
  },
  {
    id: 2,
    title: 'Parceiros',
    description: 'Seja nosso parceiro e aproveite os benefícios exclusivos.',
    image: parceiros,
  },
]
