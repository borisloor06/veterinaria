import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@ObjectType()
@Schema()
export class CompraDetalle extends Document {
  @Field()
  @Prop({ type: String })
  detalle_producto: string;

  @Field()
  @Prop({ type: Number })
  valor_unitario: number;

  @Field()
  @Prop({ type: Number })
  cantidad_producto: number;

  @Field()
  @Prop({ type: Number })
  subtotal: number;

  @Field()
  @Prop({ type: Number })
  iva: number;

  @Field()
  @Prop({ type: Number })
  total: number;
}

export const CompraDetalleSchema = SchemaFactory.createForClass(CompraDetalle);
