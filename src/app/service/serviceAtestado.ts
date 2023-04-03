import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { Atestados } from "../shared/models/atestado.model"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceAtestado{
    constructor(private http: HttpClient){ }
   createAtestadoByFuncionario(dados: any): Observable<Atestados>{
      return this.http.post<Atestados>(`${environment.API}/api/v1/atestados/vincular/${dados.nome}_${dados.sobrenome}`,dados,{headers: new HttpHeaders({accept: "*/*","Content-Type": "application/json","Access-Control-Allow-Origin": "*"})})
   }
  }