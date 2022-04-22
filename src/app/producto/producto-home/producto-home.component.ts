import { Component, OnInit } from '@angular/core';
import { pagination } from 'src/app/model/pagination';

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
  page: pagination;

  ngOnInit(): void {
    // this.productoService.getAll().subscribe(
    //   result => this.lstProductos = result
    // );

    this.productoService.getPagination(0,3).subscribe(
      result => this.page = result
    );
    console.log(this.page);
    //this.lstProductos = this.page.content;
  };
}
