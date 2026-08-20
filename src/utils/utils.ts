// Função para formatar o preço em centavos para o formato de moeda brasileira
// Recebe centavos e retorna string formatada (formatPrice(29990) => "R$ 299,90")
export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100)
}

// Gera um identificador estável a partir do nome do produto.
// A API não retorna id, então usei o productName (único no dataset atual)
// como base de definição: mesmo nome sempre gera o mesmo id.
export function slugify(text: string): string {
  return (
    text
      .normalize('NFD')
      // remove acentos
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  )
}
