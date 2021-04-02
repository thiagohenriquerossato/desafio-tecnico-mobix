import { Book } from "modules/books/model/Book";

import { CreateBooksUseCase } from "./CreateBooksUseCase";

class CreateBooksController {
  constructor(private createBookUseCase: CreateBooksUseCase) {}

  handle(book: Book): void {
    this.createBookUseCase.execute(book);
  }
}
export { CreateBooksController };
