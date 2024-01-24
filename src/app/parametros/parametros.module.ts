import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearMarcaComponent } from './components/marcas/crear-marca/crear-marca.component';
import { ListarMarcaComponent } from './components/marcas/listar-marca/listar-marca.component';
import { EliminarMarcaComponent } from './components/marcas/eliminar-marca/eliminar-marca.component';
import { CrearCategoriaComponent } from './components/categorias/crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ListarCategoriaComponent } from './components/categorias/listar-categoria/listar-categoria.component';
import { EliminarCategoriaComponent } from './components/categorias/eliminar-categoria/eliminar-categoria.component';
import { HomeParamComponent } from './pages/home-param/home-param.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CrearMarcaComponent,
    ListarMarcaComponent,
    EliminarMarcaComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    ListarCategoriaComponent,
    EliminarCategoriaComponent,
    HomeParamComponent,
  ],
  imports: [CommonModule, ParametrosRoutingModule, ReactiveFormsModule],
})
export class ParametrosModule {}
