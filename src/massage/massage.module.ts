import { Module } from '@nestjs/common';
import { MassageService } from './massage.service';
import { MassageController } from './massage.controller';
import { MsgSchema, Msg } from './scheema/massage.Scheema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [MassageService],
  controllers: [MassageController],
  imports: [
   MongooseModule.forFeature([{ name: Msg.name, schema: MsgSchema }]),
  ],
})
export class MassageModule {}
