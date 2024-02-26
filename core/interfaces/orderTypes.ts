import { IProduct } from "./productTypes";

export interface IOrder {
  id?: string;

  customerName: string;

  customerId: string;

  products: IProduct[];

  totalAmount: number;

  address: string;
}

export interface IOrderRepository {
  createOrder: (order: IOrder) => Promise<IOrder>;
  getAllOrders: () => Promise<IOrder[]>;
  getOrderById: (id: string) => Promise<IOrder>;
  getOrdersByCustomerID: (customerId: string) => Promise<IOrder[] | null>;
}
