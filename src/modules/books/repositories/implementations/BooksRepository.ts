/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import { BookModel, IBook } from "../../../../models/books";
import { CharacterModel } from "../../../../models/characters";
import { Book, IPovCharacter } from "../../model/Book";
import { IBooksRepository } from "../IBooksRepository";

class BooksRepository implements IBooksRepository {
  private books: Book[];
  private static INSTANCE: BooksRepository;

  private constructor() {
    this.books = [];
  }

  public static getInstance(): BooksRepository {
    if (!BooksRepository.INSTANCE) {
      BooksRepository.INSTANCE = new BooksRepository();
    }
    return BooksRepository.INSTANCE;
  }

  async create(bookApi: IBook): Promise<void> {
    const bookBD = await BookModel.findOne({ name: bookApi.name });
    if (!bookBD) {
      const [, , , , , idUrl] = bookApi.identity.split("/");
      const char: IPovCharacter[] = [];
      for (let i = 0; i < bookApi.povCharacters.length; i++) {
        const [, , , , , id] = bookApi.povCharacters[i].split("/");
        char.push(id);
      }
      const postBook = new BookModel({
        identity: idUrl,
        isbn: bookApi.isbn,
        name: bookApi.name,
        povCharacters: char,
        imageBase64: bookApi.imageBase64,
      });
      try {
        const saved = await postBook.save();
      } catch (err) {
        throw new Error();
      }
    }
  }
  async list(names?: string): Promise<IBook[]> {
    if (!names) {
      const list = await BookModel.find();
      return list;
    }
    const listNames: string[] = [];
    if (names.includes(" ")) {
      listNames.push(names);
    } else {
      for (let i = 0; i < names.length; i++) {
        listNames.push(names[i]);
      }
    }

    const listBooks: IBook[] = [];
    for (let i = 0; i < listNames.length; i++) {
      const book = await BookModel.findOne({ name: listNames[i] });
      listBooks.push({
        identity: book.identity,
        name: book.name,
        isbn: book.isbn,
        imageBase64: book.imageBase64,
        povCharacters: book.povCharacters,
      });
    }
    return listBooks;
  }

  async ListBooksByName(charName: string): Promise<IBook[]> {
    const char = await CharacterModel.findOne({ name: charName });
    const books = [];
    for (let i = 0; i < char.books.length; i++) {
      const book = await BookModel.findOne({ identity: char.books[i] });
      books.push({
        bookName: book.name,
      });
    }
    return books;
  }
}
export { BooksRepository };
