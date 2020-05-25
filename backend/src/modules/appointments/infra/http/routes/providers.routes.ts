import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';
import ProviderMonthAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvailabilityController';
import ProviderDailyAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderDailyAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providersMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providersDailyAvailabilityController = new ProviderDailyAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providersMonthAvailabilityController.index,
);
providersRouter.get(
  '/:provider_id/daily-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providersDailyAvailabilityController.index,
);

export default providersRouter;
