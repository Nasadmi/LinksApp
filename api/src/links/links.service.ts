import { Injectable } from '@nestjs/common';
import { CreateLinkDTO, UpdateLinkDTO } from 'src/dto/links.dto';
import { Model } from 'mongoose';
import { Links } from 'src/schemas/links.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LinksService {
  constructor(
    @InjectModel(Links.name) private readonly linksModel: Model<Links>,
  ) {}

  async createLink(link: CreateLinkDTO) {
    const newLink = new this.linksModel(link);
    return newLink.save();
  }

  async getLinks(user: string) {
    return await this.linksModel.find({ user: user });
  }

  async deleteLink(id: string) {
    return await this.linksModel.findByIdAndDelete(id);
  }

  async updateLink(id: string, link: UpdateLinkDTO) {
    return await this.linksModel.findByIdAndUpdate(id, link, { new: true });
  }
}
