import { NextFunction, Request, Response } from "express";
import { ChecklistService } from "../services/implements/ChecklistService";
import { ItemsService } from "../services/implements/ItemService";

export class ItemsController {
  private itemsService: ItemsService;
  public async updateItem(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.itemsService.updateService(
        parseInt(req.body, 0),
        req.body
      );
      res.status(200).json({
        data,
      });
    } catch (error) {
      throw error;
    }
  }
  public async updateStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.itemsService.updateStatusService(
        parseInt(req.body, 0),
        req.body.status
      );
      res.status(200).json({
        data,
      });
    } catch (error) {
      throw error;
    }
  }
  constructor() {
    this.itemsService = new ItemsService();
  }

  public async getItemsById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.itemsService.getItemById(
        parseInt(req.params.id, 0)
      );
      res.status(200).json({
        data,
      });
    } catch (error) {
      throw error;
    }
  }

    public async deleteItem(
      req: Request,
      res: Response,
      next: NextFunction
    ) {
      try {
        await this.itemsService.deleteItemService(
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
