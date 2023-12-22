import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMarcaComponent } from './components/marcas/crear-marca/crear-marca.component';
import { EditarMarcaComponent } from './components/marcas/editar-marca/editar-marca.component';
import { EliminarMarcaComponent } from './components/marcas/eliminar-marca/eliminar-marca.component';
import { HomeParamComponent } from './pages/home-param/home-param.component';
import { ListarCategoriaComponent } from './components/categorias/listar-categoria/listar-categoria.component';
import { ListarMarcaComponent } from './components/marcas/listar-marca/listar-marca.component';

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
      { path: 'editar', component: EditarMarcaComponent },
      { path: 'eliminar', component: EliminarMarcaComponent },
      { path: '', component: ListarMarcaComponent },
    ],
  },
  {
    path: 'categorias',
    children: [
      { path: 'listar', component: ListarCategoriaComponent },
      { path: '', component: ListarCategoriaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParametrosRoutingModule {}
