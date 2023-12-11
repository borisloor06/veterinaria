import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Auth extends Document {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ default: true })
  is_user: boolean;

  @Prop({ default: true })
  estado: boolean;
}

export const UserSchema = SchemaFactory.createForClass(Auth);
