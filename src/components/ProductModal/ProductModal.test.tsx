import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductModal from "./ProductModal";
import { Product } from "../../types/Product";

describe("ProductModal", () => {
  const mockProduct: Product = {
    productName: "Produto Teste",
    descriptionShort: "Descrição curta do produto teste",
    price: 100,
    photo: "https://via.placeholder.com/150",
  };

  it("deve renderizar corretamente o nome do produto", () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />);
    expect(screen.getByText("Produto Teste")).toBeInTheDocument();
  });

  it("deve renderizar corretamente a descrição do produto", () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />);
    expect(
      screen.getByText("Descrição curta do produto teste"),
    ).toBeInTheDocument();
  });

  it("deve renderizar corretamente o preço do produto", () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />);
    expect(screen.getByText(/R\$\s1,00/)).toBeInTheDocument();
  });

  it("deve renderizar corretamente a imagem do produto", () => {
    render(<ProductModal product={mockProduct} onClose={() => {}} />);
    expect(screen.getByAltText("Produto Teste")).toHaveAttribute(
      "src",
      "https://via.placeholder.com/150",
    );
  });

  it("deve chamar onClose ao clicar no botão de fechar", () => {
    const onCloseMock = vi.fn();
    render(<ProductModal product={mockProduct} onClose={onCloseMock} />);
    fireEvent.click(screen.getByText("X"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
