import { BooksRepository } from "../../repositories/implementations/BooksRepository";
import { CreateBooksController } from "./CreateBooksController";
import { CreateBooksUseCase } from "./CreateBooksUseCase";

const booksRepository = BooksRepository.getInstance();
const createBooksUseCase = new CreateBooksUseCase(booksRepository);
const createBooksController = new CreateBooksController(createBooksUseCase);

export { createBooksController };
