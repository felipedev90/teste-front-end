import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductCard from './ProductCard'
import type { Product } from '@/types/Product'

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: 'produto-teste',
    productName: 'Produto Teste',
    descriptionShort: 'Descrição curta do produto teste',
    price: 100,
    photo: 'https://via.placeholder.com/150',
  }

  it('deve renderizar corretamente o nome do produto', () => {
    render(<ProductCard product={mockProduct} onSetProduct={() => {}} />)
    expect(screen.getByText('Produto Teste')).toBeInTheDocument()
  })

  it('deve renderizar corretamente o preço do produto', () => {
    render(<ProductCard product={mockProduct} onSetProduct={() => {}} />)
    expect(screen.getByText(/R\$\s1,00/)).toBeInTheDocument()
  })

  it('deve renderizar corretamente a imagem do produto', () => {
    render(<ProductCard product={mockProduct} onSetProduct={() => {}} />)
    expect(screen.getByAltText('Produto Teste')).toHaveAttribute(
      'src',
      'https://via.placeholder.com/150',
    )
  })

  it('deve chamar onSetProduct com o produto correto ao clicar em COMPRAR', () => {
    const onSetProductMock = vi.fn()
    render(<ProductCard product={mockProduct} onSetProduct={onSetProductMock} />)

    fireEvent.click(screen.getByRole('button', { name: /comprar/i }))

    expect(onSetProductMock).toHaveBeenCalledTimes(1)
    expect(onSetProductMock).toHaveBeenCalledWith(mockProduct)
  })
})
