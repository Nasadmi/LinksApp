import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from './users.schema';
import * as mongoose from 'mongoose';

export type LinksDocument = HydratedDocument<Links>;

@Schema({ timestamps: true })
export class Links {
  @Prop({ trim: true, maxlength: 700, required: true })
  title: string;

  @Prop({ trim: true, required: true })
  link: string;

  @Prop({ trim: true, maxlength: 1000 })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const LinksSchema = SchemaFactory.createForClass(Links);
