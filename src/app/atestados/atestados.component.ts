import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceAtestado } from '../service/serviceAtestado';

@Component({
  selector: 'app-atestados',
  templateUrl: './atestados.component.html',
  styleUrls: ['./atestados.component.scss']
})
export class AtestadosComponent implements OnInit {
  formAtestado: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceAtestado
    ) { }

  ngOnInit(): void {
    this.formAtestado = this.formBuilder.group({
      nome: ['',[Validators.required]],
      sobrenome: ['', [Validators.required]],
      cid: [''],
      motivo: [''],
      medico: [''],
      hospital: [''],
      dataAfastamento: [''],
      dataRetorno: ['']
    })
  }
  onSubmit() { 
    
  }
}
