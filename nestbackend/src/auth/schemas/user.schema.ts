import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;

  @Prop({ default: 'user' }) // Default role is 'user'
  role: string;

  @Prop({ default: 0 }) // Default status is 0 (not active)
  status: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
