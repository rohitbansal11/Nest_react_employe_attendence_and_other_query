import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MsgDocument = Msg & Document;

@Schema()
export class Msg {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  msg: string;
  
  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  email: string;
  
}

export const MsgSchema = SchemaFactory.createForClass(Msg);