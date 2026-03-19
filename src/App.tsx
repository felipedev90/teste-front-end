import { useState, useEffect } from "react";
import { Product } from "./types/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import fetchProducts from "./services/productFetch";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ProductModal from "./components/ProductModal/ProductModal";
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
      <ProductShowcase
        products={products}
        tabs={tabItems}
        onSetProduct={setSelectedProduct}
      />

      <ProductShowcase products={products} onSetProduct={setSelectedProduct} />

      <ProductShowcase products={products} onSetProduct={setSelectedProduct} />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
      <Footer />
    </>
  );
}
