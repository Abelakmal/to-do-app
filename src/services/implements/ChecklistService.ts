import { ApiError } from "../../error/ApiError";
import { ChecklistRepository } from "../../repository/ChecklistRepository";
import { IChecklist, IChecklistDetail, IItems } from "../../types/checklist.type";
import { IChecklistService } from "../interfaces/IChecklistService";

export class ChecklistService implements IChecklistService {
  private checklistRepository: ChecklistRepository;

  constructor() {
    this.checklistRepository = new ChecklistRepository();
  }

  public async getChecklist(): Promise<IChecklist[]> {
    try {
      const data = await this.checklistRepository.getChecklist();
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async getChecklistById(id: number): Promise<IChecklistDetail[]> {
      try {
        const data = await this.checklistRepository.findById(id)
        if(!data) {
          throw new ApiError("Id is not found", 404);
        }
        return data
      } catch (error) {
        throw error
      }
  }

  public async createCheckListService(checklist: IChecklist): Promise<void> {
    try {
      await this.checklistRepository.createChecklist(checklist);
    } catch (error) {
      throw error;
    }
  }

  public async deleteChecklistService(id: number): Promise<void> {
    try {
      const checkId = await this.checklistRepository.findById(id);

      if (!checkId) {
        throw new ApiError("Id is not found", 404);
      }
      await this.checklistRepository.deleteChecklist(id);
    } catch (error) {
      throw error;
    }
  }

  public async createItemService(id:number,item: IItems): Promise<void> {
    try {
      const isExist = await this.checklistRepository.findById(id)
      if(!isExist){
        throw new ApiError("Id is not found", 404);
      }
      await this.checklistRepository.createItem(item);
    } catch (error) {
      throw error;
    }
  }
}
