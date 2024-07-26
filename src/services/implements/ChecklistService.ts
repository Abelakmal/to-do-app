import { ApiError } from "../../error/ApiError";
import { ChecklistRepository } from "../../repository/ChecklistRepository";
import {
  IChecklist,
  IChecklistDetail,
  IItems,
} from "../../types/checklist.type";
import { IChecklistService } from "../interfaces/IChecklistService";

export class ChecklistService implements IChecklistService {
  private checklistRepository: ChecklistRepository;

  constructor() {
    this.checklistRepository = new ChecklistRepository();
  }

  public async getChecklist(user: number): Promise<IChecklist[]> {
    try {
      const data = await this.checklistRepository.getChecklist(user);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getChecklistById(
    user: number,
    id: number
  ): Promise<IChecklistDetail[]> {
    try {
      const data = await this.checklistRepository.findById(id);
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

  public async createCheckListService(
    user: number,
    checklist: IChecklist
  ): Promise<void> {
    try {
      await this.checklistRepository.createChecklist(user, checklist);
    } catch (error) {
      throw error;
    }
  }

  public async deleteChecklistService(user: number, id: number): Promise<void> {
    try {
      const checkId = await this.checklistRepository.findById(id);

      if (!checkId) {
        throw new ApiError("Id is not found", 404);
      }

      if (checkId.userId !== user) {
        throw new ApiError("unauthorization", 401);
      }
      await this.checklistRepository.deleteChecklist(id);
    } catch (error) {
      throw error;
    }
  }

  public async createItemService(
    user: number,
    id: number,
    item: IItems
  ): Promise<void> {
    try {
      const isExist = await this.checklistRepository.findById(id);
      if (!isExist) {
        throw new ApiError("Id is not found", 404);
      }
      if (isExist.userId !== user) {
        throw new ApiError("unauthorization", 401);
      }
      await this.checklistRepository.createItem(user, id, item);
    } catch (error) {
      throw error;
    }
  }
}
