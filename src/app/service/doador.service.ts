import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoadorService {

  private urlBase: string = "http://localhost:8080/";
  constructor(private http: HttpClient) { }

  getDoadoresPorEstado(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase + "doador")
  }

  getMediaIMCDoadoresFaixaEtaria(): Observable<any[]> {
    return this.http.get<any[]>(this.urlBase + "doador/imc")
  }

  getPercentualObesos(): Observable<any> {
    return this.http.get<any>(this.urlBase + "doador/obesos")
  }
  getMediaIdadePorTipoSanguineo(): Observable<any[]> {
    return this.http.get<any>(this.urlBase + "doador/media-idade-tiposanguineo");
  }
  newDoadores(doadores: any){

    let fd: FormData = new FormData();

    fd.append("file", doadores);

    let documentDTO = JSON.stringify(document);

    fd.append("documentDTO",new Blob([JSON.stringify({
      "documentDTO": documentDTO})], {
      type: "application/json"
      })
    );

    return this.http.post(this.urlBase + "doador", fd );

    //return this.http.post(this.urlBase + "doador", {"json":doadores}, undefined);
  }
}
