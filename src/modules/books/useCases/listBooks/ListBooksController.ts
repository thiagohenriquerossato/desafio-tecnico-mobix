import { Request, Response } from "express";

import { ListBookUseCase } from "./ListBooksUseCase";

class ListBooksController {
  constructor(private listBooksUseCase: ListBookUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const books = await this.listBooksUseCase.execute(name);
    return response.json(books);
  }
  async handleListBooks(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { char } = request.params;

    const books = await this.listBooksUseCase.executeListBooks(char);
    return response.json(books);
  }
}
export { ListBooksController };
