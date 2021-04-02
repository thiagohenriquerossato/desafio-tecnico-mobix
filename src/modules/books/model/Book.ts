interface IPovCharacter {
  url: string;
}
class Book {
  identity: string;
  isbn: string;
  name: string;
  povCharacters: IPovCharacter[];
  imageBase64?: string;
}

export { Book, IPovCharacter };
