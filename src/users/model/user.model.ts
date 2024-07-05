import { Schema, model } from 'mongoose';
import { IUser } from '../interface/user.interface';

const userSchema = new Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  businessType: {
    type: String,
    enum: ['Retail', 'Wholesale'],
    default: 'Retail',
    select: false
  },
  reason: String,
  phoneNumber: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const userModel = model<IUser>('User', userSchema);

export default userModel;
