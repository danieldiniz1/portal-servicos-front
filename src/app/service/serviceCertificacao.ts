import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { Certificacao } from "../shared/models/certificacao.model"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceCertificado{
    url =  '/api'
    constructor(private http: HttpClient){ }
    createCertificacaoByFuncionario(dados: any): Observable<Certificacao>{
      return this.http.post<Certificacao>(`${this.url}/api/v1/atestados/atualizar${dados.nome}_${dados.sobrenome}`,dados)
   }
   createCertificacao(dados: any): Observable<Certificacao>{
    return this.http.post<Certificacao>(`${this.url}/criar`,dados)
   }
  }