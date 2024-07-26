import { ApiError } from "../../error/ApiError";
import { ItemRepository } from "../../repository/ItemRepository";
import { IItems } from "../../types/checklist.type";
import { IItemService } from "../interfaces/IItemService";

export class ItemsService implements IItemService {
  private itemRepository: ItemRepository;

  constructor() {
    this.itemRepository = new ItemRepository();
  }

  public async getItemById(id: number): Promise<IItems> {
    try {
      const data = await this.itemRepository.findById(id);
      if (!data) {
        throw new ApiError("Id is not found", 404);
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async updateService(id: number, data: IItems): Promise<IItems> {
    try {
      const data = await this.itemRepository.findById(id);
      if (!data) {
        throw new ApiError("Id is not found", 404);
      }
      const update = await this.itemRepository.update(id, data);
      return update;
    } catch (error) {
      throw error;
    }
  }

  public async deleteItemService(id: number): Promise<void> {
    try {
      const checkId = await this.itemRepository.findById(id);

      if (!checkId) {
        throw new ApiError("Id is not found", 404);
      }
      await this.itemRepository.deleteItem(id);
    } catch (error) {
      throw error;
    }
  }

  public async updateStatusService (id:number, status:boolean): Promise<IItems>{
    try {
        const checkId = await this.itemRepository.findById(id);

        if (!checkId) {
          throw new ApiError("Id is not found", 404);
        }
        const data = await this.itemRepository.updateStatus(id,status)
        return data
    } catch (error) {
        throw error
    }
  }
}
