import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { ImagenProductoComponent } from './components/imagen-producto/imagen-producto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listar', component: ListarProductoComponent },
      { path: 'crear', component: CrearProductoComponent },
      { path: 'editar', component: EditarProductoComponent },
      { path: 'eliminar', component: EliminarProductoComponent },
      { path: 'producto-img', component: ImagenProductoComponent },
      { path: '**', redirectTo: 'listar' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
