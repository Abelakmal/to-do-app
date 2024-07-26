import { Router } from "express";
import { verifyToken } from "../helper/jwt";

import { ItemsController } from "../controllers/ItemsController";

export class ItemsRouter {
  private router: Router;
  private itemsController: ItemsController;

  constructor() {
    this.router = Router();
    this.itemsController = new ItemsController();
    this.initializeRouters();
  }

  private initializeRouters(): void {
    this.router.patch(
      "/:id/status",
      verifyToken,
      this.itemsController.updateStatus.bind(this.itemsController)
    );

    this.router.put(
        "/:id",
        verifyToken,
        this.itemsController.updateItem.bind(this.itemsController)
      );

    this.router.get(
        "/:id",
        verifyToken,
        this.itemsController.getItemsById.bind(this.itemsController)
      );



    this.router.delete(
      "/:id",
      verifyToken,
      this.itemsController.deleteItem.bind(this.itemsController)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
