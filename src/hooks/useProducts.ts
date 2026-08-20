import { useEffect, useState } from 'react'
import type { Product } from '@/types/Product'
import fetchProducts from '@/services/productFetch'

type UseProductsResult = {
  products: Product[]
  isLoading: boolean
  hasError: boolean
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let isStale = false

    async function loadProducts() {
      const data = await fetchProducts()

      if (isStale) return

      if (data === null) {
        setHasError(true)
        setIsLoading(false)
        return
      }

      setProducts(data)
      setIsLoading(false)
    }

    loadProducts()

    return () => {
      isStale = true
    }
  }, [])

  return { products, isLoading, hasError }
}
