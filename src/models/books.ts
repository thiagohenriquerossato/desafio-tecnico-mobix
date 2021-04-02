import mongoose, { Document, Model } from "mongoose";

export interface IPovCharacter {
  url: string;
}
export interface IBook {
  identity: string;
  isbn: string;
  name: string;
  povCharacters: IPovCharacter[];
  imageBase64?: string;
}
const schema = new mongoose.Schema(
  {
    identity: { type: String, require: true, unique: true },
    isbn: { type: String, require: true },
    name: { type: String, require: true, unique: true },
    povCharacters: [],
    imageBase64: { type: String, require: true },
  },
  {
    toJSON: {
      transform: (doc, ret): void => {
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);
interface IBookModel extends Omit<IBook, "id">, Document {}
export const BookModel: Model<IBookModel> = mongoose.model("Book", schema);
