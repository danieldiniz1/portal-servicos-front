import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Planejamento } from "../shared/models/planejamento.model";

@Injectable({
    providedIn: 'root'
  })
  export class ServicePlanejamento{
    url =  '/api'
    constructor(private http: HttpClient){ }
    updatePlanejamento(dados: any): Observable<Planejamento>{
        return this.http.post<any>(`${this.url}/api/v1/planejamentosemanal/vincular/${dados.nome}_${dados.sobrenome}`,dados)
      }
  }