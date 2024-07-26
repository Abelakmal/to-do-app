import { ApiError } from "../../error/ApiError";
import { comparePassword, hashPassword } from "../../helper/bcrypt";
import { createToken } from "../../helper/jwt";
import { UserRepository } from "../../repository/UserRepository";
import { ILogin, IUser} from "../../types/user.type";
import { IUserService } from "../interfaces/IUserService";


export class UserService implements IUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async registerService(user: IUser): Promise<void> {
    try {
      const checkEmail = await this.userRepository.getUserByEmail(user.email);
      if (checkEmail) {
        throw new ApiError("Email already exists", 400);
      }

      user.password = await hashPassword(user.password);

      await this.userRepository.createUser(user);
    } catch (error) {
      throw error;
    }
  }

  public async loginUserService(
    email: string,
    password: string
  ): Promise<ILogin> {
    try {
      const user = await this.userRepository.getUserByEmail(email);

      if (!user) {
        throw new ApiError("Email or Password is wrong", 401);
      }

      const checkPassword = await comparePassword(password, user?.password);

      if (!checkPassword) {
        throw new ApiError("Email or Password is wrong", 401);
      }

      const token = createToken({ id: user.id });

      return {
        token,
      };
    } catch (error) {
      throw error;
    }
  }

}