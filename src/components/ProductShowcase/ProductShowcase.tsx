import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/Product";

interface ProductShowcaseProps {
  products: Product[];
  tabs?: string[];
}

export default function ProductShowcase({
  products,
  tabs,
}: ProductShowcaseProps) {
  return (
    <div>
      <h2>Produtos relacionados</h2>
      {tabs ? tabs.map((tab) => <span key={tab}>{tab}</span>) : "Ver todos"}
      {products.map((product, index) => (
        <div key={`${product.productName}-${index}`}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
