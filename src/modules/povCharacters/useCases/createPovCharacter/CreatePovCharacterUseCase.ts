import { PovCharacter } from "modules/povCharacters/model/PovCharacter";
import { PovCharactersRepository } from "modules/povCharacters/repositories/implementations/PovCharactersRepository";

class CreatePovCharacterUseCase {
  constructor(private povCharactersRepository: PovCharactersRepository) {}
  execute(char: PovCharacter): void {
    this.povCharactersRepository.create(char);
  }
}

export { CreatePovCharacterUseCase };
