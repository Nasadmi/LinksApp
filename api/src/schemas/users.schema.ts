import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ trim: true, maxlength: 255, required: true })
  username: string;

  @Prop({ trim: true, unique: true, maxlength: 255, required: true })
  email: string;

  @Prop({ trim: true, maxlength: 500, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
