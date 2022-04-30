import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private productoService: ProductoService,
    private route: ActivatedRoute,
  ) { }

  lstProductos: producto[];
  currentPage: number = 0;
  totalPages: number;

  ngOnInit(): void {
    // this.productoService.getAll().subscribe(
    //   result => this.lstProductos = result
    // );
    this.route.params.subscribe(params => {
      this.currentPage = params['page'];
    });

    if(this.currentPage != null){ 
      this.getAll(this.currentPage);
    } else { 
      this.getAll(0);
    }
  };

  getAll(page: number): void { 
    this.productoService.getPagination(page,5).subscribe(
      result => { 
        this.lstProductos = result.content;
        this.currentPage = result.number;
        this.totalPages = result.totalPages;
      }
    );
  }
}
