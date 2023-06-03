import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Technical } from './technical.entity';

@Schema()
export class User extends Document {
  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'normal' })
  role: string;

  @Prop({ type: Types.ObjectId, ref: Technical.name })
  technical: Technical | Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
