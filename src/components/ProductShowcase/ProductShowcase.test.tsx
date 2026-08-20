import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductShowcase from './ProductShowcase'
import type { Product } from '@/types/Product'

describe('ProductShowcase', () => {
  const mockProducts: Product[] = Array.from({ length: 6 }, (_, i) => ({
    id: `produto-${i}`,
    productName: `Produto ${i}`,
    descriptionShort: `Descrição ${i}`,
    price: 1000 * (i + 1),
    photo: 'https://via.placeholder.com/150',
  }))

  it('deve renderizar no máximo 4 produtos mesmo recebendo mais', () => {
    render(<ProductShowcase products={mockProducts} onSetProduct={() => {}} />)
    expect(screen.getAllByRole('button', { name: /comprar/i })).toHaveLength(4)
  })

  it('deve renderizar tabs quando a prop tabs é passada', () => {
    render(
      <ProductShowcase
        products={mockProducts}
        tabs={['Celular', 'Tablets']}
        onSetProduct={() => {}}
      />,
    )
    expect(screen.getByText('Celular')).toBeInTheDocument()
    expect(screen.getByText('Tablets')).toBeInTheDocument()
    expect(screen.queryByText('Ver todos')).not.toBeInTheDocument()
  })

  it('deve renderizar "Ver todos" quando a prop tabs não é passada', () => {
    render(<ProductShowcase products={mockProducts} onSetProduct={() => {}} />)
    expect(screen.getByText('Ver todos')).toBeInTheDocument()
  })

  it('deve marcar a primeira tab como ativa', () => {
    render(
      <ProductShowcase
        products={mockProducts}
        tabs={['Celular', 'Tablets']}
        onSetProduct={() => {}}
      />,
    )
    expect(screen.getByText('Celular')).toHaveClass('product-showcase__tab-item--active')
    expect(screen.getByText('Tablets')).not.toHaveClass('product-showcase__tab-item--active')
  })

  it('deve chamar onSetProduct ao clicar em comprar em qualquer card', () => {
    const onSetProductMock = vi.fn()
    render(<ProductShowcase products={mockProducts} onSetProduct={onSetProductMock} />)

    const buttons = screen.getAllByRole('button', { name: /comprar/i })
    buttons[0]?.click()

    expect(onSetProductMock).toHaveBeenCalledWith(mockProducts[0])
  })
})
