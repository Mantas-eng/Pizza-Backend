import mongoose, { Schema, Document } from "mongoose";

export interface IPizza extends Document {
  name: string;
  description: string;
  price: number;
  image: string;
}

const pizzaSchema = new Schema<IPizza>(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model<IPizza>("Pizza", pizzaSchema);
