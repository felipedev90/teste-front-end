export type Product = {
  id: string
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export type ProductApiResponse = {
  success: boolean
  products: Omit<Product, 'id'>[]
}
