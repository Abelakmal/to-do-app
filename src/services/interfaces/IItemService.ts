import { IItems } from "../../types/checklist.type";

export interface IItemService {
  getItemById(user: number, id: number): Promise<IItems>;
  updateService(user: number, id: number, data: IItems): Promise<IItems>;
  deleteItemService(user: number, id: number): Promise<void>;
  updateStatusService(
    user: number,
    id: number,
    status: boolean
  ): Promise<IItems>;
}
