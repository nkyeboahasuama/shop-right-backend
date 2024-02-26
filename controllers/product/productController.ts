import ProductUseCasesClass from "../../core/use_cases/productUseCases";
import { Response, Request } from "express";
import { ProductRepository } from "../../repositories/productRepo";
import { IProduct } from "../../core/interfaces/productTypes";

const ProductUseCases = new ProductUseCasesClass(ProductRepository);

const addProducts = async (req: Request, res: Response) => {
  const data: IProduct = req.body;
  try {
    const results = await ProductUseCases.addProduct(data);
    res.send(results).status(200);
  } catch (err) {
    res.status(500).send("Internal Server Error: Can not add product");
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const results = await ProductUseCases.getAllProducts();
    res.send(results).status(200);
  } catch (error) {
    res.status(500).send("Could not get products from server");
  }
};

const getProductDetails = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const results = await ProductUseCases.getProductDetails(id);
    res.send(results).status(200);
  } catch (error) {
    res.status(500).send("Could not get product details from server");
  }
};
export const productController = {
  addProducts,
  getProducts,
  getProductDetails,
};
