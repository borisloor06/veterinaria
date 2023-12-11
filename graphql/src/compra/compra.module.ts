import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { CompraSchema } from './entities/compra.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CompraResolver } from './compra.resolver';
import { AuthService } from 'src/guards/auth/auth.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { HttpModule } from '@nestjs/axios';
import { CompraDetalleSchema } from 'src/compra_detalle/entities/compra_detalle.entity';
import { TipoProductoSchema } from 'src/producto/entities/tipo-producto.entity';
import { VeterinariaSchema } from 'src/veterinaria/entities/veterinaria.entity';
import { ProductoSchema } from 'src/producto/entities/producto.entity';
import { ProveedorSchema } from 'src/proveedor/entities/proveedor.entity';

@Module({
  controllers: [CompraController],
  providers: [
    CompraService,
    CompraResolver,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'compras',
        useFactory: () => {
          const schema = CompraSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: 'veterinarias',
        useFactory: () => {
          const schema = CompraSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: 'productos',
        useFactory: () => {
          const schema = CompraSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: 'proveedores',
        useFactory: () => {
          const schema = CompraSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: 'detalle_compras',
        useFactory: () => {
          const schema = CompraDetalleSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: 'tipo_productos',
        useFactory: () => {
          const schema = TipoProductoSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: 'veterinarias',
        useFactory: () => {
          const schema = VeterinariaSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: 'productos',
        useFactory: () => {
          const schema = ProductoSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      },
      {
        name: 'proveedores',
        useFactory: () => {
          const schema = ProveedorSchema;
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
      }
    ]),
    HttpModule,
  ],
  exports: [CompraService, MongooseModule],
})
export class CompraModule {}
