import { IBook } from "../../../models/books";
import { Book } from "../model/Book";

interface IBooksRepository {
  create(book: Book): void;
  ListBooksByName(name: string): Promise<IBook[]> | undefined;
  list(ids?: string): Promise<IBook[]>;
}
export { IBooksRepository };
