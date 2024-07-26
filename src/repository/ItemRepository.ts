import { PrismaClient } from "@prisma/client";
import { IItems } from "../types/checklist.type";

export class ItemRepository {
    private prisma: PrismaClient;
  
    constructor() {
      this.prisma = new PrismaClient();
    }
  

}