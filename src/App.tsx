import { useEffect, useState } from 'react'
import type { Product } from '@/types/Product'
import fetchProducts from '@/services/productFetch'
import Header from '@/components/Header/Header'
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase'
import ProductModal from '@/components/ProductModal/ProductModal'

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

  return (
    <>
      <Header />

      {isLoading && <p>Carregando produtos...</p>}
      {hasError && <p>Não foi possível carregar os produtos. Tente novamente mais tarde.</p>}

      {!isLoading && !hasError && (
        <>
          <ProductShowcase products={products} onSetProduct={setSelectedProduct} />
          {selectedProduct && (
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
          )}
        </>
      )}
    </>
  )
}
