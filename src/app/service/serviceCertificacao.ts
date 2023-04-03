import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

import { Certificacao } from "../shared/models/certificacao.model"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceCertificado{
    constructor(private http: HttpClient){ }
    createCertificacaoByFuncionario(dados: any): Observable<Certificacao>{
      return this.http.post<Certificacao>(`${environment.API}/api/v1/certificacao/vincular/${dados.nomeFuncionario}_${dados.sobrenome}`,dados,{headers: new HttpHeaders({accept: "*/*","Content-Type": "application/json","Access-Control-Allow-Origin": "*"})})
   }
  }