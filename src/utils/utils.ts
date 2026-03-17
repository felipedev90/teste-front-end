// Função para formatar o preço em centavos para o formato de moeda brasileira
// Recebe centavos e retorna string formatada (formatPrice(29990) => "R$ 299,90")
export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceInCents / 100);
}
