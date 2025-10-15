import { Schema, model, Document } from "mongoose";

export interface IUpsell extends Document {
  name: string;
  price: number;
  image: string;
  category: string;
}

const UpsellSchema = new Schema<IUpsell>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<IUpsell>("Upsell", UpsellSchema);
