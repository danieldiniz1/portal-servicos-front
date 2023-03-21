import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Desligamento } from "../shared/models/desligamento.models"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceDesligamento{
    url =  '/api'
    constructor(private http: HttpClient){ }
   createDesligamentoByFuncionario(dados: any): Observable<Desligamento>{
      return this.http.post<Desligamento>(`${this.url}/api/v1/desligamento/vincular/${dados.nome}_${dados.sobrenome}`,dados)
   }
   createAtestado(dados: any): Observable<Desligamento>{
    return this.http.post<Desligamento>(`${this.url}/criar`, dados)
   }
   
  }