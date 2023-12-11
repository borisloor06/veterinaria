import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@ObjectType()
@Schema()
export class TipoProducto extends Document {
  @Field()
  @Prop({ type: String, required: true })
  nombre: string;

  @Field()
  @Prop({ type: String, required: true })
  detalle: string;
}

export const TipoProductoSchema = SchemaFactory.createForClass(TipoProducto);

export type TipoProductoDocument = TipoProducto & Document;

export const TipoProductoModel = mongoose.model<TipoProductoDocument>(
  'tipo_productos',
  TipoProductoSchema,
);
