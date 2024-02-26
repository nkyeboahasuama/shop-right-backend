import { IProduct, IProductRepository } from "../interfaces/productTypes";

class ProductUseCasesClass {
  private repository: IProductRepository;
  constructor(repository: IProductRepository) {
    this.repository = repository;
  }

  async addProduct(product: IProduct): Promise<IProduct> {
    const response = await this.repository.addProduct(product);
    return response;
  }

  async getAllProducts() {
    const response = await this.repository.getAllProducts();
    return response;
  }

  async getProductDetails(id: string): Promise<IProduct | null> {
    const product = await this.repository.getProductById(id);
    if (!product) throw new Error("This product does not exist");
    return product || null;
  }
}

export default ProductUseCasesClass;
