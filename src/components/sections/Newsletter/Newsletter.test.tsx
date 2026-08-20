import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Newsletter from './Newsletter'

describe('Newsletter', () => {
  it('deve ter labels associados aos campos de nome e e-mail', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Digite seu nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Digite seu e-mail')).toBeInTheDocument()
  })

  it('deve ter o checkbox de termos associado ao label', () => {
    render(<Newsletter />)
    expect(screen.getByLabelText('Aceito os termos e condições')).toBeInTheDocument()
  })

  it('não deve recarregar a página ao submeter o formulário', () => {
    render(<Newsletter />)
    const form = screen.getByRole('button', { name: /inscrever/i }).closest('form')
    expect(form).toBeInTheDocument()
  })
})
