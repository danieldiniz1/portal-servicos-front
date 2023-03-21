import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { DadosVivo } from "../shared/models/dadosVivo.model"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceDadosVivo{
    url =  '/api'
    constructor(private http: HttpClient){ }
   createDadosVivoByFuncionario(dados: any): Observable<DadosVivo>{
      return this.http.post<DadosVivo>(`${this.url}/api/v1/dadosvivo/vincular/${dados.nome}_${dados.sobrenome}`,dados)
   }
  }