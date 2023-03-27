import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Planejamento } from "../shared/models/planejamento.model";

@Injectable({
    providedIn: 'root'
  })
  export class ServicePlanejamento{
    constructor(private http: HttpClient){ }
    updatePlanejamento(dados: any): Observable<Planejamento>{
        return this.http.post<any>(`${environment.API}/api/v1/planejamentosemanal/vincular/${dados.nome}_${dados.sobrenome}`,dados,{headers: new HttpHeaders({accept: "*/*","Content-Type": "application/json","Access-Control-Allow-Origin": "*"})})
      }
  }