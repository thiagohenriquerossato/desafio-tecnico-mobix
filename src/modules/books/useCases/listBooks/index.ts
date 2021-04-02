import { BooksRepository } from "../../repositories/implementations/BooksRepository";
import { ListBooksController } from "./ListBooksController";
import { ListBookUseCase } from "./ListBooksUseCase";

const booksRepository = BooksRepository.getInstance();
const listBooksUseCase = new ListBookUseCase(booksRepository);
const listBooksController = new ListBooksController(listBooksUseCase);

export { listBooksController };
