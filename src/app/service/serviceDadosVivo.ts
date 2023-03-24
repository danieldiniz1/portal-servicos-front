import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { DadosVivo } from "../shared/models/dadosVivo.model"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceDadosVivo{
    constructor(private http: HttpClient){ }
   createDadosVivoByFuncionario(dados: any): Observable<DadosVivo>{
      return this.http.post<DadosVivo>(`${environment.API}/api/v1/dadosvivo/vincular/${dados.nome}_${dados.sobrenome}`,dados,{headers: new HttpHeaders({accept: "*/*","Content-Type": "application/json","Access-Control-Allow-Origin": "*"})})
   }
  }