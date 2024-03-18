import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export type UpdateUserDTO = Partial<CreateUserDTO>;
