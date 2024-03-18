import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, UpdateUserDTO } from 'src/dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('get/email/:email')
  async getUserByEmail(@Param('email') email: string) {
    return await this.userService.findUserByEmail(email);
  }

  @Get('get/id/:id')
  async getUserById(@Param('id') id: string) {
    return await this.userService.findUserByID(id);
  }

  @Post('create')
  async createUser(@Body() user: CreateUserDTO) {
    try {
      return await this.userService.createUser(user);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('This user already exists');
      }
    }
  }

  @Put('update/:id')
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDTO) {
    this.userService.updateUser(id, user);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: string) {
    this.userService.deleteUser(id);
  }
}
