import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';

class ProvidersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listProviders = container.resolve(ListProvidersService); // Dependency injection

    const providers = await listProviders.execute({
      user_id,
    });

    return response.json(classToClass(providers));
  }
}

export default ProvidersController;
