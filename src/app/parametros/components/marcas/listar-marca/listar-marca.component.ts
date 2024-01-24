import { Component, inject } from '@angular/core';
import { IMarca } from '../../../interfaces/marca.interface';
import { MarcaService } from 'src/app/parametros/services/marca.service';

@Component({
  selector: 'app-listar-marca',
  templateUrl: './listar-marca.component.html',
  styleUrls: ['./listar-marca.component.css'],
})
export class ListarMarcaComponent {
  private marcaService = inject(MarcaService);

  public listadoMarcas: IMarca[] = [];

  getMarcas() {
    return this.marcaService.getMarcas().subscribe({
      next: (marcas) => (this.listadoMarcas = marcas),
    });
  }

  ngOnInit(): void {
    this.getMarcas();
  }
}
