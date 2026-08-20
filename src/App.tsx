import { useState } from 'react'
import type { Product } from '@/types/Product'
import { useProducts } from '@/hooks/useProducts'
import { PRODUCT_TABS } from '@/data/productTabs'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import HeroBanner from '@/components/sections/HeroBanner/HeroBanner'
import Categories from '@/components/sections/Categories/Categories'
import ProductShowcase from '@/components/sections/ProductShowcase/ProductShowcase'
import PartnersBanners from '@/components/sections/PartnersBanners/PartnersBanners'
import Brands from '@/components/sections/Brands/Brands'
import Newsletter from '@/components/sections/Newsletter/Newsletter'
import ProductModal from '@/components/ui/ProductModal/ProductModal'

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
          <ProductShowcase
            products={products}
            tabs={PRODUCT_TABS}
            onSetProduct={setSelectedProduct}
          />
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
