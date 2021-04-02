import { PovCharactersRepository } from "../../repositories/implementations/PovCharactersRepository";
import { CreatePovCharacterController } from "./CreatePovCharacterController";
import { CreatePovCharacterUseCase } from "./CreatePovCharacterUseCase";

const povCharactersRepository = PovCharactersRepository.getInstance();
const createPovCharactersUseCase = new CreatePovCharacterUseCase(
  povCharactersRepository
);
const createPovCharactersController = new CreatePovCharacterController(
  createPovCharactersUseCase
);

export { createPovCharactersController };
