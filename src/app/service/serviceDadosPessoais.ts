import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { Atestados } from "../shared/models/atestado.model"
import { DadosPessoais } from "../shared/models/dadosPessoais.model"

@Injectable({
    providedIn: 'root'
})
export class ServiceDadosPessoais {
    constructor(private http: HttpClient) { }
    createDadosPessoaisByFuncionario(dados: any): Observable<DadosPessoais> {
        return this.http.post<DadosPessoais>(`${environment.API}/api/v1/dadospessoais/vincular/${dados.nome}_${dados.sobrenome}`, dados,{headers: new HttpHeaders({accept: "*/*","Content-Type": "application/json","Access-Control-Allow-Origin": "*"})})
    }
}