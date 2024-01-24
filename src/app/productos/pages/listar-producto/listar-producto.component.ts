import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
})
export class ListarProductoComponent {
  public productos: Producto[] = [];

  constructor(private readonly productoService: ProductosService) {}

  ngOnInit(): void {
    this.productoService
      .getProductos()
      .subscribe((productos) => (this.productos = productos));
  }
}
