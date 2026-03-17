export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export type ApiResponse = {
  success: boolean;
  products: Product[];
};
