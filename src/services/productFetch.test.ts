import { describe, it, expect, vi, afterEach } from 'vitest'
import fetchProducts from './productFetch'

describe('fetchProducts', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('deve retornar produtos com id gerado a partir do productName', async () => {
    const mockResponse = {
      success: true,
      products: [
        { productName: 'Produto Teste', descriptionShort: 'Desc', price: 100, photo: 'foto.jpg' },
      ],
    }

    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      }),
    )

    const result = await fetchProducts()

    expect(result).toEqual([
      {
        productName: 'Produto Teste',
        descriptionShort: 'Desc',
        price: 100,
        photo: 'foto.jpg',
        id: 'produto-teste',
      },
    ])
  })

  it('deve retornar null quando a resposta HTTP não é ok', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
      }),
    )

    const result = await fetchProducts()

    expect(result).toBeNull()
  })

  it('deve retornar null quando o fetch lança uma exceção de rede', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('Network error')))

    const result = await fetchProducts()

    expect(result).toBeNull()
  })
})
