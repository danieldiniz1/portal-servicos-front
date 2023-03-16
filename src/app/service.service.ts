import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DadosPessoais } from './shared/models/dadosPessoais.model';
import { DadosVivo } from './shared/models/dadosVivo.model';
import { Desligamento } from './shared/models/desligamento.models';
import { Ferias } from './shared/models/ferias.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url =  '/api'
  constructor(private http: HttpClient) { }

  salvar(dados:any): Observable<any>{
    return this.http.post<any>(`${this.url}/api/v1/funcionario`, dados)
  }
  updatePessoal(dados: DadosPessoais): Observable<DadosPessoais>{
    return this.http.post<any>(`${this.url}/${dados.nome}_${dados.sobrenome}`,dados)
  }
  updateVivo(dados: DadosVivo): Observable<DadosVivo>{
    return this.http.post<DadosVivo>(`${this.url}`, dados)
  }
  updateDesligamento(dados: Desligamento): Observable<Desligamento>{
    return this.http.post<Desligamento>(`${this.url}`,dados)
  }
  updateFerias(dados: Ferias): Observable<Ferias>{
    return this.http.post<Ferias>(`${this.url}`,dados)
  }
}
