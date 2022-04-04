import { Component, OnInit } from '@angular/core';

//Agregado
import { ProductoService } from '../../core/producto/producto.service';
import { producto } from '../../model/producto';

@Component({
  selector: 'app-producto-home',
  templateUrl: './producto-home.component.html',
  styleUrls: ['./producto-home.component.css']
})
export class ProductoHomeComponent implements OnInit {

  constructor(
    private productoService: ProductoService
  ) { }

  lstProductos: producto[];

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      result => this.lstProductos = result
    );
  };
}
