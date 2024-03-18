import { IsString, IsMongoId, IsNotEmpty, MaxLength } from 'class-validator';

import * as mongoose from 'mongoose';

export class CreateLinkDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(700)
  title: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @MaxLength(1000)
  description: string;

  @IsMongoId()
  user: mongoose.Schema.Types.ObjectId;
}

export type UpdateLinkDTO = Partial<Omit<CreateLinkDTO, 'user'>>;
