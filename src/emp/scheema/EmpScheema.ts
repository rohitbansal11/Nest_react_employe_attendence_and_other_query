import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmpDocument = Emp & Document;

@Schema()
export class Emp {
  @Prop()
  userId: string;

  @Prop()
  name: string;
  
  @Prop()
  empId: string;

  @Prop()
  checkIn: string;

  @Prop()
  checkOut: string;

  @Prop()
  date: string;
  
}

export const EmpSchema = SchemaFactory.createForClass(Emp);