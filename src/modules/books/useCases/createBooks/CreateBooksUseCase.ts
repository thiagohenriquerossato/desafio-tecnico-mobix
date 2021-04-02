import { Book } from "modules/books/model/Book";
import { IBooksRepository } from "modules/books/repositories/IBooksRepository";

class CreateBooksUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  execute(book: Book): void {
    this.booksRepository.create(book);
  }
}
export { CreateBooksUseCase };
