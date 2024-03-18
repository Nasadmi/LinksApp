import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LinksService } from './links.service';
import { CreateLinkDTO, UpdateLinkDTO } from 'src/dto/links.dto';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get('get/:id')
  async getLinks(@Param('id') id: string) {
    return await this.linksService.getLinks(id);
  }

  @Post('create')
  async createLink(@Body() link: CreateLinkDTO) {
    return await this.linksService.createLink(link);
  }

  @Put('update/:id')
  async updateLink(@Param('id') id: string, @Body() link: UpdateLinkDTO) {
    return await this.linksService.updateLink(id, link);
  }

  @Delete('delete/:id')
  async deleteLink(@Param('id') id: string) {
    return await this.linksService.deleteLink(id);
  }
}
