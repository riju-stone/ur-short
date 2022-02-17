import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 6);

export interface ShortURL extends Document {
  shortUrlId: string;
  destination: string;
}

const schema = new mongoose.Schema({
  shortUrlId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
});

const shortUrl = mongoose.model<ShortURL>("ShortURL", schema);

export default shortUrl;