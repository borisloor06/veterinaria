import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompraDto {
  @IsString()
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(1)
  id_veterinaria: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_producto: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_proveedor: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  id_compra_detalle: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  fecha_compra: string;
}
