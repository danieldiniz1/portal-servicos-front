import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url =  ''
  constructor(private http: HttpClient) { }

  salvar(dados:any){
    return this.http.post(this.url, dados)
  }
}
