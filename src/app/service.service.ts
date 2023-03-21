import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosPessoais } from './shared/models/dadosPessoais.model';
import { DadosVivo } from './shared/models/dadosVivo.model';
import { Desligamento } from './shared/models/desligamento.models';
import { Ferias } from './shared/models/ferias.model';
import { Planejamento } from './shared/models/planejamento.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url =  '/api'
  constructor(private http: HttpClient) { }
  // salva funcionarios
  // salvar(dados:any): Observable<any>{
  //   return this.http.post<any>(`${this.url}/api/v1/funcionario`, dados)
  // }
  updatePessoal(dados: any): Observable<Planejamento>{
    return this.http.post<any>(`${this.url}/api/v1/planejamentosemanal/vincular/${dados.nome}_${dados.sobrenome}`,dados)
  }
  // updateVivo(dados: DadosVivo): Observable<DadosVivo>{
  //   return this.http.post<DadosVivo>(`${this.url}`, dados)
  // }
  // updateDesligamento(dados: Desligamento): Observable<Desligamento>{
  //   return this.http.post<Desligamento>(`${this.url}`,dados)
  // }
  // updateFerias(dados: Ferias): Observable<Ferias>{
  //   return this.http.post<Ferias>(`${this.url}`,dados)
  // }
  // newPlanejamento(dados: any): Observable<any>{
  //   return this.http.post<any>(`${this.url}/api/v1/planejamentosemanal/novo`,dados)
  // }
  // getAllPlanejamento(): Observable<any>{
  //   return this.http.get<any>(`${this.url}/api/v1/planejamentosemanal`)
  // }
  // getIdPlanejamento(dados: any): Observable<any>{
  //   return this.http.get<any>(`${this.url}/api/v1/planejamentosemanal/${dados.id}`)
  // }
  // updatePlanejamento(dados: any): Observable<any>{
  //   return this.http.put<any>(`${this.url}/api/v1/planejamentosemanal/atualizar/${dados.id}`,dados)
  // }
}
