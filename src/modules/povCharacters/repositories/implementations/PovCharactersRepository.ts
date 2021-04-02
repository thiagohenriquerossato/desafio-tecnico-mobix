/* eslint-disable no-plusplus */
import { CharacterModel, ICharacter } from "../../../../models/characters";
import { PovCharacter } from "../../model/PovCharacter";
import { IPovCharactersRepository } from "../IPovCharactersRepository";

class PovCharactersRepository implements IPovCharactersRepository {
  private povCharacters: PovCharacter[];
  private static INSTANCE: PovCharactersRepository;

  private constructor() {
    this.povCharacters = [];
  }

  public static getInstance(): PovCharactersRepository {
    if (!PovCharactersRepository.INSTANCE) {
      PovCharactersRepository.INSTANCE = new PovCharactersRepository();
    }
    return PovCharactersRepository.INSTANCE;
  }

  async create(char: PovCharacter): Promise<void> {
    const characterPov = await CharacterModel.findOne({ name: char.name });
    if (!characterPov) {
      const [, , , , , idUrl] = char.url.split("/");
      const allBooks: string[] = [];
      if (char.books.length > 0) {
        for (let i = 0; i < char.books.length; i++) {
          const [, , , , , book] = char.books[i].split("/");
          allBooks.push(book);
        }
      }
      if (char.povBooks.length > 0) {
        for (let i = 0; i < char.povBooks.length; i++) {
          const [, , , , , book] = char.povBooks[i].split("/");
          allBooks.push(book);
        }
      }
      const postChar = new CharacterModel({
        id: idUrl,
        name: char.name,
        gender: char.gender,
        culture: char.culture,
        born: char.born,
        died: char.died,
        titles: char.titles,
        aliases: char.aliases,
        father: char.father,
        mother: char.mother,
        spouse: char.spouse,
        books: allBooks,
        tvSeries: char.tvSeries,
        playedBy: char.playedBy,
      });
      await postChar.save();
    }
  }

  async list(name?: string): Promise<ICharacter[]> {
    if (!name) {
      const list = await CharacterModel.find();
      return list;
    }
    const listNames: string[] = [];
    if (name.includes(" ")) {
      listNames.push(name);
    } else {
      for (let i = 0; i < name.length; i++) {
        listNames.push(name[i]);
      }
    }
    const listChar: ICharacter[] = [];
    for (let i = 0; i < listNames.length; i++) {
      const char = await CharacterModel.findOne({ name: listNames[i] });
      listChar.push(char);
    }
    return listChar;
  }
}

export { PovCharactersRepository };
