import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpModule } from './emp/emp.module';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Rohit:1111@cluster0.nf3ir.mongodb.net/nestNew?retryWrites=true&w=majority'),
   AuthModule,
   EmpModule
  
  ],
})
export class AppModule {}
