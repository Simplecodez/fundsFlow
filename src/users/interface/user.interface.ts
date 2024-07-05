import { DeleteResult, Document } from 'mongodb';
import { Request } from 'express';
import { UpdateQuery, Types } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  name: String;
  email: string;
  businessType: string;
  reason: string;
  phoneNumber: string;
  createdAt: Date;
}

export interface IUserRequest extends Request {
  user: IUser;
}

export interface IUserService {
  createOne(data: Partial<IUser>): Promise<IUser>;
}
