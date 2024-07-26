import { Router } from "express";
import { UserController } from "../controllers/UserController";

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.router.post(
      "/register",
      this.userController.registerUser.bind(this.userController)
    );
    this.router.post(
      "/login",
      this.userController.loginUser.bind(this.userController)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
