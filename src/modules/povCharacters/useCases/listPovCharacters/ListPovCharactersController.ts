import { Request, Response } from "express";

import { ListPovCharactersUseCase } from "./ListPovCharactersUseCase";

class ListPovCharactersController {
  constructor(private listPovCharacterUseCase: ListPovCharactersUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;
    const povCharacters = await this.listPovCharacterUseCase.execute(name);
    return response.json(povCharacters);
  }
}
export { ListPovCharactersController };
