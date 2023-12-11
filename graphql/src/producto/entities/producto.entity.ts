import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';
import { TipoProducto } from './tipo-producto.entity'; // Import the TipoProducto schema
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Producto extends Document {
  @Field()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'tipo_productos',
    autopopulate: true,
  })
  id_tipo_producto: TipoProducto;

  @Field()
  @Prop({ type: String, required: true })
  nombre_producto: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);

export type ProductoDocument = Producto & Document;

export const ProductoModel = mongoose.model<ProductoDocument>(
  'productos',
  ProductoSchema,
);
