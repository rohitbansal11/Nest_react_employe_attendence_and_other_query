import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop({ required: true })
  name: string;

  @Prop()
  role: string;
  
  @Prop()
  empId: string;

  @Prop()
  position: string;

  @Prop()
  password: string;

  @Prop()
  email: string;
  
}

export const AuthSchema = SchemaFactory.createForClass(Auth);