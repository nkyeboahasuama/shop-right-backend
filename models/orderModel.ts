import { Schema, model } from "mongoose";
import { IOrder } from "../core/interfaces/orderTypes";

const orderSchema = new Schema<IOrder>(
  {
    customerName: {
      type: String,
      required: true,
    },
    products: [
      {
        type: String,
        required: true,
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = model<IOrder>("Order", orderSchema);
