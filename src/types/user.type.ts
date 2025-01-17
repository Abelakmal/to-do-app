export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface ILogin {
    token :string
}

declare global {
    namespace Express {
      interface Request {
        user?: {
          id: number;
        };
      }
    }
  }