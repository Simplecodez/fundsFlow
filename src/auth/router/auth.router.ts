import express from 'express';
import { container } from 'tsyringe';
import { RegisterController } from '../controller/create-user.controller';

const registerController = container.resolve(RegisterController);

class AuthRouter {
  private router: express.Router;
  constructor() {
    this.router = express.Router();
    this.initialize();
  }

  private initialize() {
    this.router.post('/register', registerController.register());
  }

  getRouter(): express.Router {
    return this.router;
  }
}

const authRouter = new AuthRouter();

export default authRouter.getRouter();
