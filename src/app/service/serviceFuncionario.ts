import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

@Injectable({
    providedIn: 'root'
  })
  export class ServiceFuncionario{
    constructor(private http: HttpClient){ }
    createFuncionario(dados: any): Observable<any>{
      return this.http.post<any>(`${environment.API}/api/v1/funcionario/cadastrar`,dados,{headers: new HttpHeaders({accept: "*/*","Content-Type": "application/json","Access-Control-Allow-Origin": "*"})})
    }
  }