import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Ferias } from "../shared/models/ferias.model"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceFerias{
    url =  '/api'
    constructor(private http: HttpClient){ }
   createFeriasByFuncionario(dados: any): Observable<Ferias>{
      return this.http.post<Ferias>(`${this.url}/api/v1/ferias/vincular/${dados.nome}_${dados.sobrenome}`,dados)
   }
   createAtestado(dados: any): Observable<Ferias>{
    return this.http.post<Ferias>(`${this.url}/criar`,dados)
   }
  }