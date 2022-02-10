import { Module } from '@nestjs/common';
import { EmpController } from './emp.controller';
import { EmpService } from './emp.service';
import {Emp, EmpSchema } from './scheema/EmpScheema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EmpController],
  providers: [EmpService],
 imports: [
    MongooseModule.forFeature([{ name: Emp.name, schema: EmpSchema }]),
   
  ],
})
export class EmpModule {}
