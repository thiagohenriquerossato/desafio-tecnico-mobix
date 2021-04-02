class PovCharacter {
  id?: string;
  url?: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  books: string[];
  povBooks?: string[];
  tvSeries: string[];
  playedBy: string[];
}

export { PovCharacter };
