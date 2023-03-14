import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url =  '/api'
  constructor(private http: HttpClient) { }

  salvar(dados:any): Observable<any>{
    return this.http.post<any>(`${this.url}/api/v1/funcionario`, dados)
  }
}
