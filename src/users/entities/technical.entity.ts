import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Technical extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  lastName: string;

  @Prop({ type: Number })
  age: number;
}

export const TechnicalSchema = SchemaFactory.createForClass(Technical);
