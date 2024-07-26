import { IChecklist, IChecklistDetail, IItems } from "../../types/checklist.type";

export interface IChecklistService {
  getChecklist(): Promise<IChecklist[]>;
  getChecklistById(id: number): Promise<IChecklistDetail[]>;
  createCheckListService(checklist: IChecklist): Promise<void>;
  deleteChecklistService(id: number): Promise<void>;
  createItemService(id:number,item: IItems): Promise<void>;
}
