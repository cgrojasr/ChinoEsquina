import { Component, OnInit } from '@angular/core';
//import { NgForm } from '@angular/forms';

import { producto } from 'src/app/model/producto';
import { UnidadMedidaService } from 'src/app/core/unidadmedida/unidad-medida.service';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/core/producto/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { unidadMedida } from 'src/app/model/unidad-medida';
import { marca } from 'src/app/model/marca';
import { MarcaService } from 'src/app/core/marca/marca.service';

@Component({
  selector: 'app-producto-management',
  templateUrl: './producto-management.component.html',
  styleUrls: ['./producto-management.component.css']
})
export class ProductoManagementComponent implements OnInit {

  objProducto : producto = {
    idProducto: 0,
    nombre: '',
    sku:'',
    descripcion:'',
    activo: true,
    idMarca:0,
    idUnidadMedida:0,
    idUsuarioModifico: 0,
    idUsuarioRegistro: 0,
    cantidadUnitaria: 0
  };

  lstUnidadMedida: Observable<unidadMedida[]>;
  lstMarca: Observable<marca[]>;
  idProducto: number;

  constructor(
    private route: ActivatedRoute,
    private unidadMedidaService: UnidadMedidaService,
    private productoService: ProductoService,
    private marcaService: MarcaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lstUnidadMedida = this.unidadMedidaService.getAll();
    this.lstMarca = this.marcaService .getAll();
    
    this.route.params.subscribe(params => {
      this.idProducto = params['id'];
    });
    if(this.idProducto != null){
      this.productoService.getById(this.idProducto).subscribe(
        data => {
          this.objProducto = data;
          //console.log(this.objProducto);
        }
      );
    }
  }

  //onSubmit(form: NgForm){
  onSubmit(){
    if(this.idProducto != null) {
      this.objProducto.idUsuarioModifico = 1;
      this.productoService.update(this.objProducto).subscribe(
        result => this.objProducto = result
        );
    }
    else {
      this.objProducto.idUsuarioRegistro = 1;
      this.productoService.register(this.objProducto).subscribe(
        result => this.objProducto = result
        );
    }

    this.router.navigate(['/producto'])
  }
}
