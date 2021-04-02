import { ICharacter } from "../../../models/characters";

interface IPovCharactersRepository {
  create(char: ICharacter): Promise<void>;
  list(name?: string): Promise<ICharacter[]>;
}
export { IPovCharactersRepository };
