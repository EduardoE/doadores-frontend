import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {

  constructor(private http: HttpClient) { }

  getDoadoresPorEstado(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/doador")
  }

  getMediaIMCDoadoresFaixaEtaria(): Observable<string> {
    return this.http.get<string>("http://localhost:8080/doador/imc")
  }
}
