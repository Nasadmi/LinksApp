import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { UsersModule } from './users/users.module';
import { LinksModule } from './links/links.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), '.env'),
    }),
    UsersModule,
    LinksModule,
  ],
})
export class AppModule {}
