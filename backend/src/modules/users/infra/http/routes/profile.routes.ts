import { Router } from 'express';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const profileRouter = Router();
profileRouter.use(ensureAuthenticated);

const profileController = new ProfileController();

profileRouter.put('/', profileController.update);
profileRouter.get('/', profileController.show);

export default profileRouter;