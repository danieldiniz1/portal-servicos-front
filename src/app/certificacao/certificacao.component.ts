import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceCertificado } from '../service/serviceCertificacao';

@Component({
  selector: 'app-certificacao',
  templateUrl: './certificacao.component.html',
  styleUrls: ['./certificacao.component.scss']
})
export class CertificacaoComponent implements OnInit {
  formCertificacao: FormGroup
  constructor(private formBuilder: FormBuilder, private service: ServiceCertificado) { }

  ngOnInit(): void {
    this.formCertificacao = this.formBuilder.group({
      nomeFuncionario: ['',[Validators.required]],
      sobrenome: ['',[Validators.required]],
      nome: [''],
      descricao: [''],
      dataInicio: [''],
      dataFinalizacao: ['']
    })
  }
  onSubmit() { 
    console.log(this.formCertificacao.value)
    const data = this.formCertificacao.value.dataInicio
    const dataRetorno = this.formCertificacao.value.dataFinalizacao
    this.formCertificacao.patchValue({
      dataInicio: data.split("-").reverse().join("/"),
      dataFinalizacao: dataRetorno.split("-").reverse().join("/")
    })
    this.service.createCertificacaoByFuncionario(this.formCertificacao.value).subscribe(value =>{
      console.log(value)
      alert("Certificação salva com sucesso!")
      this.formCertificacao.reset()
      this.formCertificacao.reset()}, (erro: any) => alert("Erro ao salvar os dados!"))
  }
}
