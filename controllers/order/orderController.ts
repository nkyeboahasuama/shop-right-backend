import { Request, Response } from "express";
import { Order } from "../../models/orderModel";
import { IOrder } from "../../core/interfaces/orderTypes";

const createOrder = async (req: Request, res: Response) => {
  const data: IOrder = req.body;
  try {
    const order = new Order(data);
    const results = await order.save();
    res.send(results).status(200);
  } catch (error) {
    res.send("Internal core error").status(500);
  }
};

const editOrder = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updatedOrder = req.body;
    const results = await Order.findByIdAndUpdate(id, updatedOrder);
    res.send(results).status(200);
  } catch (error) {
    res.send("Internal core error").status(500);
  }
};

const getUserOrder = (req: Request, res: Response) => {
  // get request to db
};

export const orderController = {
  createOrder,
  editOrder,
  getUserOrder,
};
