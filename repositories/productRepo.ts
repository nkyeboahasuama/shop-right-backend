import { IProduct, IProductRepository } from "../core/interfaces/productTypes";
import { Product } from "../models/productModel";

export const addProduct = async (product: IProduct) => {
  const newProduct = new Product(product);
  const response = await newProduct.save();
  return response;
};

export const getAllProducts = async () => {
  const response = Product.find({});
  return response;
};

export const getProductById = async (id: string): Promise<IProduct | null> => {
  const response = Product.findById(id);
  return response;
};

export const ProductRepository: IProductRepository = {
  addProduct,
  getAllProducts,
  getProductById,
};
