import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Fault extends Document {
  @Prop({ required: true })
  fault: string;

  @Prop()
  symptoms: string;

  @Prop()
  diagnosis: string;

  @Prop()
  solution: string;

  @Prop({ type: Number, required: true })
  kmCurrent: number;
}

export const FaultSchema = SchemaFactory.createForClass(Fault);
