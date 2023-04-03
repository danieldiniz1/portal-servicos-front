import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { Ferias } from "../shared/models/ferias.model"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceFerias{
    constructor(private http: HttpClient){ }
   createFeriasByFuncionario(dados: any): Observable<Ferias>{
      return this.http.post<Ferias>(`${environment.API}/api/v1/ferias/vincular/${dados.nome}_${dados.sobrenome}`,dados,{headers: new HttpHeaders({accept: "*/*","Content-Type": "application/json","Access-Control-Allow-Origin": "*"})})
   }
  }