import { useState, useEffect } from "react";
import { Product } from "./types/Product";
import fetchProducts from "./services/productFetch";
import ProductModal from "./components/ProductModal/ProductModal";
import ProductShowcase from "./components/ProductShowcase/ProductShowcase";

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
      <ProductShowcase products={products} onSetProduct={setSelectedProduct} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
