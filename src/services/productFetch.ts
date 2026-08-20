import type { Product, ProductApiResponse } from '@/types/Product'
import { slugify } from '@/utils/utils'

const API_URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export default async function fetchProducts(): Promise<Product[] | null> {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      console.error(`Error fetching products: HTTP ${response.status}`)
      return null
    }

    const data = (await response.json()) as ProductApiResponse

    return data.products.map((product) => ({
      ...product,
      id: slugify(product.productName),
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
    return null
  }
}
