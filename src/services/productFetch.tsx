import type { ApiResponse } from "../types/Product";

export default async function fetchProducts(): Promise<ApiResponse | null> {
  try {
    const response = await fetch(
      "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json",
    );
    const data = (await response.json()) as ApiResponse;
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}
