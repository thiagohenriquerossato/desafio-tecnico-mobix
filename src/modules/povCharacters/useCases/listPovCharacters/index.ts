import { PovCharactersRepository } from "../../repositories/implementations/PovCharactersRepository";
import { ListPovCharactersController } from "./ListPovCharactersController";
import { ListPovCharactersUseCase } from "./ListPovCharactersUseCase";

const povCharactersRepository = PovCharactersRepository.getInstance();
const listPovCharactersUseCase = new ListPovCharactersUseCase(
  povCharactersRepository
);
const listPovCharactersController = new ListPovCharactersController(
  listPovCharactersUseCase
);

export { listPovCharactersController };
