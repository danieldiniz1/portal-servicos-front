import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstaDesligado() {
    return [
      { valor: 'sim', desc: 'Sim' },
      { valor: 'nao', desc: 'Não' }
    ];
  }
}
