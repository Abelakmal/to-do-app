import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/implements/UserService";

export class UserController {

    private userService: UserService;

    constructor() {
        this.userService = new UserService();
      }

    public async registerUser(
        req: Request,
        res: Response,
        next: NextFunction
      ): Promise<void> {
        try {
          await this.userService.registerService(req.body);
          res.status(200).json({ data: "ok" });
        } catch (error) {
          next(error);
        }
      }

      public async loginUser(req: Request, res: Response, next: NextFunction) {
        try {
          const { email, password } = req.body;
          const result = await this.userService.loginUserService(email, password);
          
          res.status(200).json({
            data: result
          });
        } catch (error) {
          next(error);
        }
      }
}