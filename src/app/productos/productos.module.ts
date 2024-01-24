import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CrearProductoComponent } from './pages/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { ListarProductoComponent } from './pages/listar-producto/listar-producto.component';
import { EliminarProductoComponent } from './pages/eliminar-producto/eliminar-producto.component';
import { ImagenProductoComponent } from './components/imagen-producto/imagen-producto.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    CrearProductoComponent,
    EditarProductoComponent,
    ListarProductoComponent,
    EliminarProductoComponent,
    ImagenProductoComponent,
    CardComponent,
  ],
  imports: [CommonModule, ProductosRoutingModule],
})
export class ProductosModule {}
