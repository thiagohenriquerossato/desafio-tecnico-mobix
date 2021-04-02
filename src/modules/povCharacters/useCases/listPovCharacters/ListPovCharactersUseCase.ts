import { ICharacter } from "../../../../models/characters";
import { PovCharacter } from "../../model/PovCharacter";
import { PovCharactersRepository } from "../../repositories/implementations/PovCharactersRepository";

class ListPovCharactersUseCase {
  constructor(private povCharactersRepository: PovCharactersRepository) {}
  async execute(name: string[]): Promise<ICharacter[]> {
    const povCharacters = await this.povCharactersRepository.list(name);
    return povCharacters;
  }
}
export { ListPovCharactersUseCase };
