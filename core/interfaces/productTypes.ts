export interface IProduct {
  name: string;

  description: string;

  price: number;

  image: string;

  sizes: string[];
}

export interface IProductRepository {
  addProduct: (product: IProduct) => Promise<IProduct>;
  getAllProducts: () => Promise<IProduct[]>;
  getProductById: (id: string) => Promise<IProduct | null>;
}
