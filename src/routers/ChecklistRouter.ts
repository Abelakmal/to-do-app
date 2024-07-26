import { Router } from "express";
import { TestController } from "../controllers/TestController";
import { verifyToken } from "../helper/jwt";
import { ChecklistController } from "../controllers/CheckListController";

export class ChecklistRouter {
  private router: Router;
  private checklistController: ChecklistController;

  constructor() {
    this.router = Router();
    this.checklistController = new ChecklistController();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.router.get(
      "/",
      verifyToken,
      this.checklistController.getChecklist.bind(this.checklistController)
    );

    this.router.get(
        "/:id",
        verifyToken,
        this.checklistController.getChecklistById.bind(this.checklistController)
      );

    this.router.post(
      "/",
      verifyToken,
      this.checklistController.createChecklist.bind(this.checklistController)
    );

    this.router.post(
        "/:id/item",
        verifyToken,
        this.checklistController.createItems.bind(this.checklistController)
      );
    this.router.delete(
      "/:id",
      verifyToken,
      this.checklistController.deleteChecklist.bind(this.checklistController)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
