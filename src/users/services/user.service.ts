import { Model } from "mongoose";
import { inject, injectable } from "tsyringe";
import { IUser, IUserService } from "../interface/user.interface";

@injectable()
export class UserService implements IUserService {
  constructor(@inject("UserModel") private readonly userModel: Model<IUser>) {}

  createOne(data: Partial<IUser>): Promise<IUser> {
    return this.userModel.create(data);
  }
}
