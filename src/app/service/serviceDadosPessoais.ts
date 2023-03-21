import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Atestados } from "../shared/models/atestado.model"
import { DadosPessoais } from "../shared/models/dadosPessoais.model"

@Injectable({
    providedIn: 'root'
})
export class ServiceDadosPessoais {
    url = '/api'
    constructor(private http: HttpClient) { }
    createDadosPessoaisByFuncionario(dados: any): Observable<DadosPessoais> {
        return this.http.post<DadosPessoais>(`${this.url}/api/v1/dadospessoais/vincular/${dados.nome}_${dados.sobrenome}`, dados)
    }
}