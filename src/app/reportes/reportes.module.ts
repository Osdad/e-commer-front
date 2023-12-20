import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { ProductoPorMarcaComponent } from './components/producto-por-marca/producto-por-marca.component';
import { ProductoPorCategoriaComponent } from './components/producto-por-categoria/producto-por-categoria.component';


@NgModule({
  declarations: [
    ProductoPorMarcaComponent,
    ProductoPorCategoriaComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
