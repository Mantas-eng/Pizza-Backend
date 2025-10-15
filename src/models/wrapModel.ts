import mongoose, { Schema, Document } from "mongoose";

export interface IWrap extends Document {
  name: string;
  ingredients: string;
  price: number;
  image: string;
}

const wrapSchema = new Schema<IWrap>(
  {
    name: { type: String, required: true },
    ingredients: String,
    price: { type: Number, required: true },
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model<IWrap>("Wrap", wrapSchema);
