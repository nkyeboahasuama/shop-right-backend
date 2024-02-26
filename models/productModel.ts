import { Schema, Types, model } from "mongoose";
import { IProduct } from "../core/interfaces/productTypes";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    sizes: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);
