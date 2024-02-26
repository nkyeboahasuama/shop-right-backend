import { IProduct } from "../interfaces/productTypes";

export class OrderEntityClass {
  constructor(
    public customerName: string,
    public customerId: string,
    public products: IProduct[],
    public totalAmount: number,
    public address: string
  ) {
    this.customerName = customerName;
    this.customerId = customerId;
    this.products = products;
    this.totalAmount = totalAmount;
    this.address = address;
  }

  private hasProducts() {
    const products = this.products;
    if (products.length < 1)
      throw new Error("There are no products to make this order.");
    return products;
  }

  private hasAddress() {
    const address = this.address;
    if (!address) throw new Error("Please add an address");
    return address;
  }

  public validateOrder() {
    this.hasProducts;
    this.hasAddress();
  }
}
