import express, {
  Express,
  json,
  NextFunction,
  Request,
  Response,
} from "express";
import { PORT } from "./helper/config";
import cors from "cors";
import { TestRouter } from "./routers/TestRouter";
import { UserRouter } from "./routers/UserRouter";
import { ChecklistRouter } from "./routers/ChecklistRouter";
import { ItemsRouter } from "./routers/ItemsRouter";
import { ApiError } from "./error/ApiError";

export class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
    this.handleNotFound();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
  }

  private routes(): void {
    const router = new TestRouter();
    const userRouter = new UserRouter();
    const itemRouter = new ItemsRouter();
    const checklistRouter = new ChecklistRouter();
    this.app.use("/api/test", router.getRouter());
    this.app.use("/api/user", userRouter.getRouter());
    this.app.use("/api/checklist", checklistRouter.getRouter());
    this.app.use("/api/items", itemRouter.getRouter());
  }
  private handleNotFound(): void {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes("/api/")) {
        res.status(404).json({ error: "Not found" });
      } else {
        next();
      }
    });
  }

  private handleError() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof ApiError) {
          res.status(err.statusCode).json({
            error: err.message,
          });
        } else {
          console.error("Error: ", err.stack);
          res.status(500).json({ error: err.message });
        }
      }
    );
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  }

  public getApp() {
    return this.app;
  }
}
