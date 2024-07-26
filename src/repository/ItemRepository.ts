import { PrismaClient } from "@prisma/client";
import { IItems } from "../types/checklist.type";

export class ItemRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async findById(id: number): Promise<IItems | null> {
    try {
      const result = await this.prisma.item.findUnique({
        where: {
          id,
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  public async update(id: number, data: IItems): Promise<IItems> {
    try {
      const result = await this.prisma.item.update({
        where: {
          id,
        },
        data,
      });

      return result;
    } catch (error) {
      throw error;
    }
  }
  public async updateStatus(id: number, status: boolean): Promise<IItems> {
    try {
      const result = await this.prisma.item.update({
        where: {
          id,
        },
        data: {
          status,
        },
      });

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async deleteItem(id: number): Promise<void> {
    try {
      await this.prisma.item.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
