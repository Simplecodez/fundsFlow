import { container } from 'tsyringe';
import { IUser, IUserService } from '../users/interface/user.interface';
import userModel from '../users/model/user.model';
import { Model } from 'mongoose';
import { RegisterController } from '../auth/controller/create-user.controller';
import { UserService } from '../users/services/user.service';

container.register<Model<IUser>>('UserModel', { useValue: userModel });
container.register<RegisterController>('RegisterController', { useClass: RegisterController });
container.register<IUserService>('UserService', { useClass: UserService });
