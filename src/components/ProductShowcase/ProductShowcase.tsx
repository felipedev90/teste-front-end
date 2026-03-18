import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/Product";
import "./ProductShowcase.scss";

interface ProductShowcaseProps {
  products: Product[];
  tabs?: string[];
  onSetProduct: (product: Product | null) => void;
}

export default function ProductShowcase({
  products,
  tabs,
  onSetProduct,
}: ProductShowcaseProps) {
  return (
    <section className="product-showcase">
      {/* Cabeçalho da Vitrine */}
      <div className="product-showcase__header">
        <h2 className="product-showcase__title">Produtos relacionados</h2>

        {/* Renderização Condicional: Abas ou "Ver todos" */}
        {tabs ? (
          <ul className="product-showcase__tabs">
            {tabs.map((tab, index) => (
              <li
                key={tab}
                // A primeira aba (index 0) recebe a classe de ativa (ex: CELULAR)
                className={`product-showcase__tab-item ${index === 0 ? "product-showcase__tab-item--active" : ""}`}
              >
                {tab}
              </li>
            ))}
          </ul>
        ) : (
          <a href="#" className="product-showcase__view-all">
            Ver todos
          </a>
        )}
      </div>

      {/* Grid de Produtos (Carrossel) */}
      <div className="product-showcase__grid">
        {/* Simulação de Setas do Carrossel */}
        <button className="product-showcase__arrow product-showcase__arrow--prev">
          {"<"}
        </button>

        <div className="product-showcase__product-list">
          {/* Renderização dos Produtos: Exibe apenas os 4 primeiros produtos*/}
          {products.slice(0, 4).map((product, index) => (
            <ProductCard
              key={`${product.productName}-${index}`}
              product={product}
              onSetProduct={onSetProduct}
            />
          ))}
        </div>

        <button className="product-showcase__arrow product-showcase__arrow--next">
          {">"}
        </button>
      </div>
    </section>
  );
}
