import { NextFunction, Request, Response } from "express";
import { ItemsService } from "../services/implements/ItemService";

export class ItemsController {
  private itemsService: ItemsService;

  constructor() {
    this.itemsService = new ItemsService();
  }

  public async updateItem(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.itemsService.updateService(
        req.user?.id as number,
        parseInt(req.params.id, 0),
        req.body
      );
      res.status(200).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  public async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.itemsService.updateStatusService(
        req.user?.id as number,
        parseInt(req.params.id, 0),
        req.body.status
      );
      res.status(200).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  public async getItemsById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.itemsService.getItemById(
        req.user?.id as number,
        parseInt(req.params.id, 0)
      );
      res.status(200).json({
        data,
      });
    } catch (error) {
      next(error);
    }
  }

  public async deleteItem(req: Request, res: Response, next: NextFunction) {
    try {
      await this.itemsService.deleteItemService(
        req.user?.id as number,
        parseInt(req.params.id, 0)
      );
      res.status(200).json({
        data: "ok",
      });
    } catch (error) {
      next();
    }
  }
}
