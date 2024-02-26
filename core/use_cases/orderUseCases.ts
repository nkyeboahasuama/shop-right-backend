import { OrderEntityClass } from "../entities/orderEntity";
import { IOrderRepository, IOrder } from "../interfaces/orderTypes";
import UserUseCasesClass from "./userUseCases";

class OrderUseCasesClass {
  private repository: IOrderRepository;
  private userUseCase: UserUseCasesClass;
  constructor(repository: IOrderRepository, userUseCase: UserUseCasesClass) {
    this.repository = repository;
    this.userUseCase = userUseCase;
  }

  async createOrder(
    customerName: string,
    customerId: string,
    products: [],
    totalAmount: number,
    address: string
  ): Promise<IOrder | null> {
    const user = await this.userUseCase.getUserById(customerId);
    if (!user) throw new Error("User does not have an account");
    const newOrder = new OrderEntityClass(
      customerName,
      customerId,
      products,
      totalAmount,
      address
    );
    // Check the return values of these validators
    newOrder.validateOrder();
    const response = await this.repository.createOrder(newOrder);
    return response;
  }

  async getOrdersByCustomerId(customerId: string): Promise<IOrder[] | null> {
    const user = await this.userUseCase.getUserById(customerId);
    if (!user) throw new Error("User does not have an account");
    const orders = await this.repository.getOrdersByCustomerID(customerId);
    return orders;
  }
}

export default OrderUseCasesClass;
