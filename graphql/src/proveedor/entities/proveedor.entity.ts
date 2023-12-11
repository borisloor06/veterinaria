import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Proveedor extends Document {
  @Field()
  @Prop({ type: String, required: true })
  RUC: string;

  @Field()
  @Prop({ type: String, required: true })
  nombre_proveedor: string;

  @Field()
  @Prop({ type: String, required: true })
  apellido_proveedor: string;
}

export const ProveedorSchema = SchemaFactory.createForClass(Proveedor);

export type ProveedorDocument = Proveedor & Document;

export const ProveedorModel = mongoose.model<ProveedorDocument>(
  'proveedores',
  ProveedorSchema,
);
