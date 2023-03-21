import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceAtestado } from '../service/serviceAtestado';
import { DatePipe } from '@angular/common';

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
      nome: ['', [Validators.required]],
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
    console.log(this.formAtestado.value)
    const data = this.formAtestado.value.dataAfastamento
    const dataRetorno = this.formAtestado.value.dataRetorno
    this.formAtestado.patchValue({
      dataAfastamento: data.split("-").reverse().join("/"),
      dataRetorno: dataRetorno.split("-").reverse().join("/")
    })
    this.service.createAtestadoByFuncionario(this.formAtestado.value).subscribe(value => {
      console.log(value)
      alert("Atestado salvo com sucesso!")
      this.formAtestado.reset()
    }, (erro: any) => alert("Erro"))
  }
  // converteData(dados: any){
  //   const data = dados.value.dataAfastamento
  //   const dataRetorno = dados.value.dataRetorno
  //  return dados.patchValue({
  //     dataAfastamento: data.split("-").reverse().join("/"),
  //     dataRetorno: dataRetorno.split("-").reverse().join("/")
  //   })
  //  }
}
