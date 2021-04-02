import { Router } from "express";

import { listBooksController } from "../modules/books/useCases/listBooks";

const bookRoutes = Router();

bookRoutes.get("/", (request, response) =>
  listBooksController.handle(request, response)
);

bookRoutes.get("/:char", (request, response) =>
  listBooksController.handleListBooks(request, response)
);

export { bookRoutes };
