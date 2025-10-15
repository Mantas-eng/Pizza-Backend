import mongoose, { Schema, Document } from "mongoose";

export interface IDrink extends Document {
  name: string;
  size: string;
  price: number;
  image: string;
}

const drinkSchema = new Schema<IDrink>(
  {
    name: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model<IDrink>("Drink", drinkSchema);
