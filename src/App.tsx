import { useEffect, useState } from 'react'
import type { Product } from './types/Product'
import fetchProducts from './services/productFetch'

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- usado pelo ProductCard a partir da Branch 2
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
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

  if (isLoading) {
    return <p>Carregando produtos...</p>
  }

  if (hasError) {
    return <p>Não foi possível carregar os produtos. Tente novamente.</p>
  }

  return (
    <>
      <p>{products.length} produtos carregados</p>
      {selectedProduct && <p>Selecionado: {selectedProduct.productName}</p>}
    </>
  )
}
