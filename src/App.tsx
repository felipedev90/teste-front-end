import { useState } from 'react'
import type { Product } from '@/types/Product'
import { useProducts } from '@/hooks/useProducts'
import Header from '@/components/Header/Header'
import HeroBanner from '@/components/HeroBanner/HeroBanner'
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase'
import ProductModal from '@/components/ProductModal/ProductModal'

export default function App() {
  const { products, isLoading, hasError } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <Header />
      <HeroBanner />

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
