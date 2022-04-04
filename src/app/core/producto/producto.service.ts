import { Injectable } from '@angular/core';

//Agregado 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { producto } from 'src/app/model/producto';

const endpoint = 'http://localhost:8080/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient
    ) { }
  
    getAll(): Observable<producto[]>{
      return this.http.get<producto[]>(`${endpoint}`);
    }
  
    getById(id_producto: number): Observable<producto>{
      return this.http.get<producto>(`${endpoint}/${id_producto}`);
    }

    register(objProducto: producto): Observable<producto> {
      return this.http.post<producto>(`${endpoint}`, objProducto);
    }

    update(objProducto: producto): Observable<producto> {
      return this.http.put<producto>(`${endpoint}`, objProducto);
    }
}
