import {
  IChecklist,
  IChecklistDetail,
  IItems,
} from "../../types/checklist.type";

export interface IChecklistService {
  getChecklist(user: number): Promise<IChecklist[]>;
  getChecklistById(user: number, id: number): Promise<IChecklistDetail[]>;
  createCheckListService(user: number, checklist: IChecklist): Promise<void>;
  deleteChecklistService(user:number,id: number): Promise<void>;
  createItemService(user: number, id: number, item: IItems): Promise<void>;
}
