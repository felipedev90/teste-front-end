import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductModal from './ProductModal'
import type { Product } from '@/types/Product'

describe('ProductModal', () => {
  const mockProduct: Product = {
    id: 'produto-teste',
    productName: 'Produto Teste',
    descriptionShort: 'Descrição curta do produto teste',
    price: 100,
    photo: 'https://via.placeholder.com/150',
  }

  it('deve renderizar corretamente o nome do produto', () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />)
    expect(screen.getByText('Produto Teste')).toBeInTheDocument()
  })

  it('deve renderizar corretamente a descrição do produto', () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />)
    expect(screen.getByText('Descrição curta do produto teste')).toBeInTheDocument()
  })

  it('deve renderizar corretamente o preço do produto', () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />)
    expect(screen.getByText(/R\$\s1,00/)).toBeInTheDocument()
  })

  it('deve renderizar corretamente a imagem do produto', () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />)
    expect(screen.getByAltText('Produto Teste')).toHaveAttribute(
      'src',
      'https://via.placeholder.com/150',
    )
  })

  it('deve chamar onClose ao clicar no botão de fechar', () => {
    const onCloseMock = vi.fn()
    render(<ProductModal product={mockProduct} onClose={onCloseMock} />)

    fireEvent.click(screen.getByRole('button', { name: /fechar/i }))

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })

  it('deve ter aria-labelledby apontando para o título do modal', () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />)
    const dialog = screen.getByRole('dialog')
    const title = screen.getByText('Produto Teste')

    expect(dialog).toHaveAttribute('aria-labelledby', title.id)
  })
})
