import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { marca } from 'src/app/model/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor() { }

  lstMarca: marca[] = [
    {
      idMarca: 1,
      nombre: "Donofrio" 
    },
    {
      idMarca: 2,
      nombre: "Alicorp"
    },
    {
      idMarca: 3,
      nombre: "Nestle"
    }
  ]

  getAll(): Observable<marca[]> {
    return of(this.lstMarca);
  }
}
