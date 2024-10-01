import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListModule } from './list/list.module';

@Module({
  imports: [ListModule,MongooseModule.forRoot('mongodb://localhost:27017/list')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
