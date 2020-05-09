import { Request, Response } from 'express';

import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    // const authenticateUser = new AuthenticateUserService(usersRepository);
    const authenticateUser = container.resolve(AuthenticateUserService); // Dependency injection

    const { user, token } = await authenticateUser.execute({
      email,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  }
}

export default SessionsController;
