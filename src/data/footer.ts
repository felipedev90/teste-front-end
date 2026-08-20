export type FooterLinkGroup = {
  title: string
  links: { label: string; href: string }[]
}

export const FOOTER_LINK_GROUPS: readonly FooterLinkGroup[] = [
  {
    title: 'Institucional',
    links: [
      { label: 'Sobre Nós', href: '#' },
      { label: 'Movimento', href: '#' },
      { label: 'Trabalhe conosco', href: '#' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { label: 'Suporte', href: '#' },
      { label: 'Fale Conosco', href: '#' },
      { label: 'Perguntas Frequentes', href: '#' },
    ],
  },
  {
    title: 'Termos',
    links: [
      { label: 'Termos e Condições', href: '#' },
      { label: 'Política de Privacidade', href: '#' },
      { label: 'Troca e Devolução', href: '#' },
    ],
  },
]
