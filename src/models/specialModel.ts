import mongoose, { Schema, Document } from "mongoose";

export interface ISpecialItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ISpecial extends Document {
  title: string;
  description: string;
  discount: number;
  validUntil: Date;
  items: ISpecialItem[];
}

const specialItemSchema = new Schema<ISpecialItem>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
  },
  { _id: false }
);

const specialSchema = new Schema<ISpecial>(
  {
    title: { type: String, required: true },
    description: String,
    discount: Number,
    validUntil: Date,
    items: [specialItemSchema],
  },
  { timestamps: true }
);

export default mongoose.model<ISpecial>("Special", specialSchema);
