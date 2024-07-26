import { NextFunction, Request, Response } from "express";
import { ChecklistService } from "../services/implements/ChecklistService";

export class ChecklistController {
  private checklistService: ChecklistService;

  constructor() {
    this.checklistService = new ChecklistService();
  }

  public async getChecklist(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.checklistService.getChecklist();
      res.status(200).json({
        data,
      });
    } catch (error) {
      throw error;
    }
  }
  public async getChecklistById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const data = await this.checklistService.getChecklistById(
        parseInt(req.params.id, 0)
      );
      res.status(200).json({
        data,
      });
    } catch (error) {
      throw error;
    }
  }

  public async createItems(req: Request, res: Response, next: NextFunction) {
    try {
      await this.checklistService.createItemService(
        parseInt(req.params.id, 0),
        req.body
      );
      res.status(200).json({
        data: "ok",
      });
    } catch (error) {
      next();
    }
  }

  public async createChecklist(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await this.checklistService.createCheckListService(req.body);
      res.status(200).json({
        data: "ok",
      });
    } catch (error) {
      next();
    }
  }

  public async deleteChecklist(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      await this.checklistService.deleteChecklistService(
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
