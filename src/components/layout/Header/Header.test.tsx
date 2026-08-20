import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('deve renderizar o logo com alt descritivo', () => {
    render(<Header />)
    expect(screen.getByAltText('Econverse')).toBeInTheDocument()
  })

  it('deve ter um label associado ao campo de busca', () => {
    render(<Header />)
    expect(screen.getByLabelText('O que você está buscando?')).toBeInTheDocument()
  })

  it('deve renderizar a navegação como landmark nav', () => {
    render(<Header />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('deve renderizar todos os itens de navegação', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /todas categorias/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /ofertas do dia/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /assinatura/i })).toBeInTheDocument()
  })

  it('deve ter aria-label nos botões de ação', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /carrinho/i })).toBeInTheDocument()
  })
})
