import { Injectable } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from 'src/dto/users.dto';
import { User } from 'src/schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async createUser(user: CreateUserDTO) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findUserByID(id: string) {
    return await this.userModel.findById(id);
  }

  async findUserByEmail(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  async updateUser(id: string, user: UpdateUserDTO) {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }

  async deleteUser(id: string) {
    return await this.userModel.findByIdAndDelete(id);
  }
}
