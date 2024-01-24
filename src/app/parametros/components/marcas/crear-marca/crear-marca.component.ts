import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMarca } from 'src/app/parametros/interfaces/marca.interface';
import { MarcaService } from 'src/app/parametros/services/marca.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css'],
})
export class CrearMarcaComponent {
  private marcaService = inject(MarcaService);
  private fb = inject(FormBuilder);

  public marca?: IMarca;

  public formMarca: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(4)]],
  });

  crearMarca() {
    const { nombre } = this.formMarca.value;
    this.marca = { nombre };
    this.marcaService.createMarca(this.marca).subscribe({
      next: () => Swal.fire('Marca Creada', '', 'success'),
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
