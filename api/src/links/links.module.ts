import { Module } from '@nestjs/common';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Links, LinksSchema } from 'src/schemas/links.schema';

@Module({
  controllers: [LinksController],
  providers: [LinksService],
  imports: [
    MongooseModule.forFeature([{ name: Links.name, schema: LinksSchema }]),
  ],
})
export class LinksModule {}
