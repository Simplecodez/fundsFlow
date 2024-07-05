import { inject, injectable } from 'tsyringe';
import { IUserService } from '../../users/interface/user.interface';
import { catchAsync } from '../../utils/general/catch-async.utils';
import { NextFunction, Request, Response } from 'express';
import { registerValidationSchema } from '../../validator/user.validator';
import validator from 'validator';
import { AppError } from '../../utils/general/app.error.utils';

@injectable()
export class RegisterController {
  constructor(@inject('UserService') private readonly userService: IUserService) {}

  register() {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      await registerValidationSchema.validateAsync(req.body);
      if (!validator.isMobilePhone(req.body.phoneNumber, 'any'))
        return next(new AppError('Invalid phone number.', 400));
      await this.userService.createOne(req.body);
      res.status(200).json({
        success: true,
        message: 'Thank you for registering.'
      });
    });
  }
}
