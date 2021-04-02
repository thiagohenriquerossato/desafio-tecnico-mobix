import { BooksRepository } from "modules/books/repositories/implementations/BooksRepository";

import { IBook } from "../../../../models/books";

class ListBookUseCase {
  constructor(private booksRepository: BooksRepository) {}
  async execute(names?: string[]): Promise<IBook[]> {
    const books = await this.booksRepository.list(names);
    return books;
  }
  async executeListBooks(char?: string[]): Promise<IBook[]> {
    const books = await this.booksRepository.ListBooksByName(char);
    return books;
  }
}
export { ListBookUseCase };
