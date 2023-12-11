import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@ObjectType()
@Schema()
export class Veterinaria extends Document {
  @Field()
  @Prop({ type: String, required: true })
  nombre_veterinaria: string;

  @Field()
  @Prop({ type: String, required: true })
  direccion: string;
}

export const VeterinariaSchema = SchemaFactory.createForClass(Veterinaria);

export type VeterinariaDocument = Veterinaria & Document;
export const VeterinariaModel = mongoose.model<VeterinariaDocument>(
  'veterinarias',
  VeterinariaSchema,
);
