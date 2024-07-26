import { PrismaClient } from "@prisma/client";
import { IChecklist, IChecklistDetail, IItems } from "../types/checklist.type";

export class ChecklistRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async getChecklist(): Promise<IChecklist[]> {
    try {
      const data = await this.prisma.checklist.findMany({});
      return data;
    } catch (error) {
      throw error;
    }
  }

  public async createChecklist(checklist: IChecklist): Promise<void> {
    try {
      await this.prisma.checklist.create({
        data: checklist,
      });
    } catch (error) {
      throw error;
    }
  }

  public async createItem(item:IItems): Promise<void> {
    try {
      await this.prisma.item.create({
          data: item
      });

    } catch (error) {
      throw error;
    }
  }

  public async deleteChecklist(id: number): Promise<void> {
    try {
      await this.prisma.checklist.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  public async findById(id: number): Promise<any> {
    try {
      const result = await this.prisma.checklist.findUnique({
        where: {
          id,
        },
        include: {
          items: true,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
