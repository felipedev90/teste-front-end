// Função para formatar o preço em centavos para o formato de moeda brasileira
// Recebe centavos e retorna string formatada (formatPrice(29990) => "R$ 299,90")
export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceInCents / 100);
}

// Função para calcular o desconto em reais entre o preço original e o preço atual
// Recebe preço atual e preço original, retorna valor do desconto (getDiscount(29990, 39990) => 10000)
export function getDiscount(price: number, originalPrice: number): number {
  return originalPrice - price;
}
