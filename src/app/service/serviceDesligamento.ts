import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { Desligamento } from "../shared/models/desligamento.models"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceDesligamento{
    constructor(private http: HttpClient){ }
   createDesligamentoByFuncionario(dados: any): Observable<Desligamento>{
      return this.http.post<Desligamento>(`${environment.API}/api/v1/desligamento/vincular/${dados.nome}_${dados.sobrenome}`,dados,{headers: new HttpHeaders({accept: "*/*","Content-Type": "application/json","Access-Control-Allow-Origin": "*"})})
   }
  }