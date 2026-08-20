import { useState } from 'react'
import type { Product } from '@/types/Product'
import { useProducts } from '@/hooks/useProducts'
import Header from '@/components/Header/Header'
import HeroBanner from '@/components/HeroBanner/HeroBanner'
import Categories from '@/components/Categories/Categories'
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase'
import ProductModal from '@/components/ProductModal/ProductModal'
import PartnersBanners from '@/components/PartnersBanners/PartnersBanners'
import Brands from '@/components/Brands/Brands'
import Newsletter from '@/components/Newsletter/Newsletter'
import Footer from '@/components/Footer/Footer'

export default function App() {
  const { products, isLoading, hasError } = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <Header />
      <HeroBanner />
      <Categories />

      {isLoading && <p>Carregando produtos...</p>}
      {hasError && <p>Não foi possível carregar os produtos. Tente novamente mais tarde.</p>}

      {!isLoading && !hasError && (
        <>
          <ProductShowcase products={products} onSetProduct={setSelectedProduct} />
          <PartnersBanners />
          <ProductShowcase products={products} onSetProduct={setSelectedProduct} />
          <PartnersBanners />
          <Brands />
          <ProductShowcase products={products} onSetProduct={setSelectedProduct} />
          {selectedProduct && (
            <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
          )}
        </>
      )}

      <Newsletter />
      <Footer />
    </>
  )
}
