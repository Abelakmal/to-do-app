import { PrismaClient } from "@prisma/client";
import { IUser } from "../types/user.type";

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser(user: IUser): Promise<void> {
    try {
      await this.prisma.user.create({
        data: user,
      });
    } catch (error) {
      throw error;
    }
  }

  public async getUserByEmail(email: string): Promise<IUser> {
    try {
      const data = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });
      return data as IUser;
    } catch (error) {
      throw error;
    }
  }
}