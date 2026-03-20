import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../../types/Product";

describe("ProductCard", () => {
  const mockProduct: Product = {
    productName: "Produto Teste",
    descriptionShort: "Descrição curta do produto teste",
    price: 100,
    photo: "https://via.placeholder.com/150",
  };

  it("deve renderizar corretamente o nome do produto", () => {
    render(<ProductCard product={mockProduct} onSetProduct={() => {}} />);
    expect(screen.getByText("Produto Teste")).toBeInTheDocument();
  });

  it("deve renderizar corretamente o preço do produto", () => {
    render(<ProductCard product={mockProduct} onSetProduct={() => {}} />);
    expect(screen.getByText(/R\$\s1,00/)).toBeInTheDocument();
  });

  it("deve renderizar corretamente a imagem do produto", () => {
    render(<ProductCard product={mockProduct} onSetProduct={() => {}} />);
    expect(screen.getByAltText("Produto Teste")).toHaveAttribute(
      "src",
      "https://via.placeholder.com/150",
    );
  });
});
