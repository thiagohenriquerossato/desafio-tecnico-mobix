import mongoose, { Document, Model } from "mongoose";

export interface ICharacter {
  id?: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  books?: string[];
  povBooks?: string[];
  tvSeries: string[];
  playedBy: string[];
}
const schema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    gender: { type: String },
    culture: { type: String },
    born: { type: String },
    died: { type: String },
    titles: [],
    aliases: [],
    father: { type: String },
    mother: { type: String },
    spouse: { type: String },
    books: [],
    povBooks: [],
    tvSeries: [],
    playedBy: [],
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
interface ICharacterModel extends Omit<ICharacter, "id">, Document {}
export const CharacterModel: Model<ICharacterModel> = mongoose.model(
  "Character",
  schema
);
