import * as mongoose from 'mongoose';

export interface IProducts extends mongoose.Document {
  id: number,
  brand: string,
  description: string,
  image: string,
  price: number
};

export const ProductsSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true }
});

export const Product = mongoose.model<IProducts>("products", ProductsSchema);

export interface IDiscounts extends mongoose.Document {
  brand: string,
  threshold: number,
  discount: number
};

export const DiscountsSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  threshold: { type: Number, required: true },
  discount: { type: Number, required: true }
});

export const Discount = mongoose.model<IDiscounts>("discounts", DiscountsSchema);