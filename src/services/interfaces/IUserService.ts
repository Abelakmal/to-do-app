import { IUser } from "../../types/user.type";


export interface IUserService {
  registerService(user: IUser): Promise<void>;
  loginUserService (email: string, password: string) : Promise<Object>
}