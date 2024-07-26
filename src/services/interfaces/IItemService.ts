import { IItems } from "../../types/checklist.type";

export interface IItemService {
  getItemById(id: number): Promise<IItems>;
  updateService(id: number, data: IItems): Promise<IItems>;
  deleteItemService(id: number): Promise<void>;
  updateStatusService(id: number, status: boolean): Promise<IItems>;
}
