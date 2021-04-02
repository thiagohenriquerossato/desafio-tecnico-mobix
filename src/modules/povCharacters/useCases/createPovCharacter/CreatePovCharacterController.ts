import { PovCharacter } from "../../model/PovCharacter";
import { CreatePovCharacterUseCase } from "./CreatePovCharacterUseCase";

class CreatePovCharacterController {
  constructor(private createPovCharactersUseCase: CreatePovCharacterUseCase) {}
  handle(char: PovCharacter): void {
    this.createPovCharactersUseCase.execute(char);
  }
}
export { CreatePovCharacterController };
