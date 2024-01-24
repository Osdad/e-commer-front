import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMarcaComponent } from './components/marcas/crear-marca/crear-marca.component';

import { EliminarMarcaComponent } from './components/marcas/eliminar-marca/eliminar-marca.component';
import { HomeParamComponent } from './pages/home-param/home-param.component';
import { ListarCategoriaComponent } from './components/categorias/listar-categoria/listar-categoria.component';
import { ListarMarcaComponent } from './components/marcas/listar-marca/listar-marca.component';
import { CrearCategoriaComponent } from './components/categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { EliminarCategoriaComponent } from './components/categorias/eliminar-categoria/eliminar-categoria.component';

const routes: Routes = [
  {
    path: '',
    component: HomeParamComponent,
  },
  {
    path: 'marcas',
    children: [
      { path: 'listar', component: ListarMarcaComponent },
      { path: 'crear', component: CrearMarcaComponent },
      { path: 'eliminar', component: EliminarMarcaComponent },
      { path: '**', component: ListarMarcaComponent },
    ],
  },
  {
    path: 'categorias',
    children: [
      { path: 'listar', component: ListarCategoriaComponent },
      { path: 'crear', component: CrearCategoriaComponent },
      { path: 'editar', component: EditarCategoriaComponent },
      { path: 'eliminar', component: EliminarCategoriaComponent },
      { path: '', component: ListarCategoriaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosRoutingModule {}
