import { ApiError } from "../../error/ApiError";
import { ItemRepository } from "../../repository/ItemRepository";
import { IItems } from "../../types/checklist.type";
import { IItemService } from "../interfaces/IItemService";

export class ItemsService implements IItemService {
  private itemRepository: ItemRepository;

  constructor() {
    this.itemRepository = new ItemRepository();
  }

  public async getItemById(user: number, id: number): Promise<IItems> {
    try {
      const data = await this.itemRepository.findById(id);

      if (!data) {
        throw new ApiError("Id is not found", 404);
      }
      

      if (data.userId !== user) {
        throw new ApiError("unauthorization", 401);
      }
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async updateService(
    user: number,
    id: number,
    item: IItems
  ): Promise<IItems> {
    try {
      const data = await this.itemRepository.findById(id);
      if (!data) {
        throw new ApiError("Id is not found", 404);
      }
      if (data.userId !== user) {
        throw new ApiError("unauthorization", 401);
      }
      const update = await this.itemRepository.update(id, item);
      return update;
    } catch (error) {
      throw error;
    }
  }

  public async deleteItemService(user: number, id: number): Promise<void> {
    try {
      const checkId = await this.itemRepository.findById(id);

      if (!checkId) {
        throw new ApiError("Id is not found", 404);
      }

      if (checkId.userId !== user) {
        throw new ApiError("unauthorization", 401);
      }

      await this.itemRepository.deleteItem(id);
    } catch (error) {
      throw error;
    }
  }

  public async updateStatusService(
    user: number,
    id: number,
    status: boolean
  ): Promise<IItems> {
    try {
      const checkId = await this.itemRepository.findById(id);

      if (!checkId) {
        throw new ApiError("Id is not found", 404);
      }

      if (checkId.userId !== user) {
        throw new ApiError("unauthorization", 401);
      }
      const data = await this.itemRepository.updateStatus(id, status);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
