import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'
import fetchProducts from '@/services/productFetch'

vi.mock('@/services/productFetch')

describe('App', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('deve exibir mensagem de carregamento inicialmente', () => {
    vi.mocked(fetchProducts).mockReturnValue(new Promise(() => {}))

    render(<App />)

    expect(screen.getByText('Carregando produtos...')).toBeInTheDocument()
  })

  it('deve exibir mensagem de erro quando o fetch falha', async () => {
    vi.mocked(fetchProducts).mockResolvedValue(null)

    render(<App />)

    await waitFor(() => {
      expect(
        screen.getByText('Não foi possível carregar os produtos. Tente novamente mais tarde.'),
      ).toBeInTheDocument()
    })
  })

  it('deve renderizar a vitrine de produtos quando o fetch tem sucesso', async () => {
    const mockProducts = [
      {
        id: 'produto-1',
        productName: 'Produto 1',
        descriptionShort: 'Desc',
        price: 100,
        photo: 'foto.jpg',
      },
    ]
    vi.mocked(fetchProducts).mockResolvedValue(mockProducts)

    render(<App />)

    await waitFor(() => {
      expect(screen.getAllByText('Produto 1').length).toBeGreaterThan(0)
    })

    expect(screen.queryByText('Carregando produtos...')).not.toBeInTheDocument()
  })

  it('deve envolver o conteúdo principal em uma landmark main', async () => {
    vi.mocked(fetchProducts).mockResolvedValue([])

    render(<App />)

    await waitFor(() => {
      expect(screen.getByRole('main')).toBeInTheDocument()
    })
  })
})
