import imageToBase64 from "image-to-base64";

import { api, apiChar } from "../../api";
import { BookModel, IBook } from "../../models/books";
import { Book } from "../books/model/Book";
import { createBooksController } from "../books/useCases/createBooks";
import { PovCharacter } from "../povCharacters/model/PovCharacter";
import { createPovCharactersController } from "../povCharacters/useCases/createPovCharacter";

interface IDataResponse {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: string;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}

export async function getAllData(): Promise<void> {
  const booksNormalized: Book[] = [];
  const povCharactersNormalized: string[] = [];
  try {
    const { data } = await api.get<IDataResponse[]>("/books");
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const image = await imageToBase64(
        `http://covers.openlibrary.org/b/isbn/${data[i].isbn}-M.jpg`
      )
        .then((response) => {
          return response;
        })
        .catch((error) => {
          throw new Error(error);
        });
      const bookNorm: IBook = {
        identity: data[i].url,
        isbn: data[i].isbn,
        name: data[i].name,
        povCharacters: data[i].povCharacters,
        imageBase64: image,
      };
      booksNormalized.push(bookNorm);
      createBooksController.handle(bookNorm);
      bookNorm.povCharacters.forEach((char) => {
        if (!povCharactersNormalized.includes(char)) {
          povCharactersNormalized.push(char);
        }
      });
    }
  } catch (err) {
    throw new Error(err);
  }
  const povCharacters: PovCharacter[] = [];
  povCharactersNormalized.forEach(async (char) => {
    try {
      const { data } = await apiChar.get<PovCharacter>(`${char}`);
      const character: PovCharacter = data;
      createPovCharactersController.handle(character);
      povCharacters.push(character);
    } catch (err) {
      throw new Error(err);
    }
  });
}
