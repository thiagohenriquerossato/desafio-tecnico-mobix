import { Router } from "express";

import { listPovCharactersController } from "../modules/povCharacters/useCases/listPovCharacters";

const charactersRoutes = Router();

charactersRoutes.get("/", (request, response) =>
  listPovCharactersController.handle(request, response)
);
export { charactersRoutes };
