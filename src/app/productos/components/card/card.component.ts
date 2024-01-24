import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  public producto!: Producto;

  ngOnInit(): void {
    if (!this.producto) throw new Error('se requiere un producto');
  }
}
