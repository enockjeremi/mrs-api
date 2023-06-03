import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Category } from './category.entity';

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

  @Prop({ type: Types.ObjectId, ref: Category.name })
  category: Category | Types.ObjectId;
}

export const FaultSchema = SchemaFactory.createForClass(Fault);
