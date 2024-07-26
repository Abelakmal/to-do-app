import { NextFunction, Request, Response } from "express";
import { ChecklistService } from "../services/implements/ChecklistService";
import { ItemsService } from "../services/implements/ItemService";

export class ItemsController {
  private itemsService: ItemsService;

  constructor() {
    this.itemsService = new ItemsService();
  }

//   public async getChecklist(req: Request, res: Response, next: NextFunction) {
//     try {
//       const data = await this.checklistService.getChecklist();
//       res.status(200).json({
//         data,
//       });
//     } catch (error) {
//       throw error;
//     }
//   }
//   public async getChecklistById(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) {
//     try {
//       const data = await this.checklistService.getChecklistById(
//         parseInt(req.params.id, 0)
//       );
//       res.status(200).json({
//         data,
//       });
//     } catch (error) {
//       throw error;
//     }
//   }

 

//   public async deleteChecklist(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) {
//     try {
//       await this.checklistService.deleteChecklistService(
//         parseInt(req.params.id, 0)
//       );
//       res.status(200).json({
//         data: "ok",
//       });
//     } catch (error) {
//       next();
//     }
//   }
}
