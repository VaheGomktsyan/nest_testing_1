import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ListDocument = HydratedDocument<List>;
@Schema()
export class List {
  @Prop()
  name: string;
}


export const ListSchema=SchemaFactory.createForClass(List)