import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';
import { CompraDetalle } from 'src/compra_detalle/entities/compra_detalle.entity';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';
import { Producto } from 'src/producto/entities/producto.entity';
import { Veterinaria } from 'src/veterinaria/entities/veterinaria.entity';

@ObjectType()
@Schema()
export class Compra {
  @Field()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'veterinarias',
    autopopulate: true,
  })
  id_veterinaria: Veterinaria;

  @Field()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'productos',
    autopopulate: true,
  })
  id_producto: Producto;

  @Field()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'proveedores',
    autopopulate: true,
  })
  id_proveedor: Proveedor;

  @Field()
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: 'detalle_compras',
    autopopulate: true,
  })
  id_compra_detalle: CompraDetalle;

  @Field()
  @Prop({ required: true })
  fecha_compra: string;

  @Field()
  @Prop({ required: true })
  active: boolean;
  default = true;
}

export const CompraSchema = SchemaFactory.createForClass(Compra);

export type CompraDocument = Compra & Document;
export const CompraModel = mongoose.model<CompraDocument>(
  'compras',
  CompraSchema,
);
