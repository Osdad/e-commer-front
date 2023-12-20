import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { ImagenProductoComponent } from './components/imagen-producto/imagen-producto.component';


@NgModule({
  declarations: [
    CrearProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    EliminarProductoComponent,
    ImagenProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
