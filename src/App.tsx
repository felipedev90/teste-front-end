import { useEffect, useState } from 'react'
import type { Product } from '@/types/Product'
import fetchProducts from '@/services/productFetch'
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase'

export default function App() {
  const [products, setProducts] = useState<Product[]>([])
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
    return <p>Não foi possível carregar os produtos. Tente novamente mais tarde.</p>
  }

  return (
    <>
      <ProductShowcase products={products} onSetProduct={setSelectedProduct} />
      {selectedProduct && <p>Selecionado: {selectedProduct.productName}</p>}
    </>
  )
}
