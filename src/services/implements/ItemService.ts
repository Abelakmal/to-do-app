import { ItemRepository } from "../../repository/ItemRepository";
import { IItems } from "../../types/checklist.type";
import { IItemService } from "../interfaces/IItemService";

export class ItemsService implements IItemService {
  private checklistRepository: ItemRepository;

  constructor() {
    this.checklistRepository = new ItemRepository();
  }


  
}
