import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { unidadMedida } from 'src/app/model/unidad-medida';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  constructor() { }

  lstUnidadMedida: unidadMedida[] = [
    {
      idUnidadMedida: 1,
      nombre: "Unidad" 
    },
    {
      idUnidadMedida: 2,
      nombre: "Litro"
    },
    {
      idUnidadMedida: 3,
      nombre: "Kilogramo"
    }
  ]

  getAll(): Observable<unidadMedida[]> {
    return of(this.lstUnidadMedida);
  }
}
