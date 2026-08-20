import { describe, it, expect, vi, afterEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useProducts } from './useProducts'
import fetchProducts from '@/services/productFetch'

vi.mock('@/services/productFetch')

describe('useProducts', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('deve iniciar em estado de loading', () => {
    vi.mocked(fetchProducts).mockResolvedValue([])

    const { result } = renderHook(() => useProducts())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.products).toEqual([])
    expect(result.current.hasError).toBe(false)
  })

  it('deve popular products e desligar loading quando o fetch tem sucesso', async () => {
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

    const { result } = renderHook(() => useProducts())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.products).toEqual(mockProducts)
    expect(result.current.hasError).toBe(false)
  })

  it('deve setar hasError e desligar loading quando o fetch retorna null', async () => {
    vi.mocked(fetchProducts).mockResolvedValue(null)

    const { result } = renderHook(() => useProducts())

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.hasError).toBe(true)
    expect(result.current.products).toEqual([])
  })

  it('não deve atualizar estado se o componente desmontar antes do fetch resolver', async () => {
    let resolvePromise: (value: never[]) => void
    const pendingPromise = new Promise<never[]>((resolve) => {
      resolvePromise = resolve
    })
    vi.mocked(fetchProducts).mockReturnValue(pendingPromise)

    const { result, unmount } = renderHook(() => useProducts())

    unmount()
    resolvePromise!([])

    await new Promise((r) => setTimeout(r, 0))

    expect(result.current.isLoading).toBe(true)
  })
})
