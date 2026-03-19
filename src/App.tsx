import { useState, useEffect } from "react";
import { Product } from "./types/Product";
import Brands from "./components/Brands/Brands";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import fetchProducts from "./services/productFetch";
import Categories from "./components/Categories/Categories";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Newsletter from "./components/Newsletter/Newsletter";
import ProductModal from "./components/ProductModal/ProductModal";
import PartnerBanners from "./components/PartnerBanners/PartnerBanners";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";

const tabItems = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "Tvs",
  "Ver todos",
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    try {
      async function loadProducts() {
        const data = await fetchProducts();
        setProducts(data?.products || []);
      }
      loadProducts();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, []);

  return (
    <>
      <Header />
      <HeroBanner />
      <Categories />
      <ProductShowcase
        products={products}
        tabs={tabItems}
        onSetProduct={setSelectedProduct}
      />
      <PartnerBanners />
      <ProductShowcase products={products} onSetProduct={setSelectedProduct} />
      <Brands />
      <PartnerBanners />
      <ProductShowcase products={products} onSetProduct={setSelectedProduct} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <Newsletter />
      <Footer />
    </>
  );
}
