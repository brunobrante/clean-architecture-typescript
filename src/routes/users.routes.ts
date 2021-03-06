import { Router } from 'express';
import { createUserController } from '../modules/accounts/useCases/createUser';

const usersRouter = Router();

usersRouter.post("/", createUserController.handle);

export { usersRouter }