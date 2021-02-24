import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '../../../services/CreateUserService';

export default class CreateUsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, sex, date_of_birth, own_car } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
      sex,
      date_of_birth,
      own_car,
    });

    return response.json(user);
  }
}
