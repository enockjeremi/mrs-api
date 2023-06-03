import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PPU extends Document {
  @Prop({ required: true, unique: true, index: true })
  ppu: string;

  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop({ type: Number })
  year: number;

  @Prop({ required: true, type: Number })
  kmInit: number;
}

export const PPUSchema = SchemaFactory.createForClass(PPU);
