import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Atestados } from "../shared/models/atestado.model"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceAtestado{
    url =  '/api'
    constructor(private http: HttpClient){ }
   createAtestadoByFuncionario(dados: any): Observable<Atestados>{
      return this.http.post<Atestados>(`${this.url}/api/v1/atestados/vincular/${dados.nome}_${dados.sobrenome}`,dados)
   }
   createAtestado(dados: any): Observable<Atestados>{
    return this.http.post<Atestados>(`${this.url}/criar`, dados)
   }
   
  }