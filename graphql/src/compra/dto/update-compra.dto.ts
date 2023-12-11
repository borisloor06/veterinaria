import { PartialType } from '@nestjs/mapped-types';
import { CreateCompraDto } from './create-compra.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateCompraDto extends PartialType(CreateCompraDto) {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  fecha_compra?: string;
}
