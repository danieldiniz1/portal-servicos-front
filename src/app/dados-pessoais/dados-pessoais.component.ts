import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceDadosPessoais } from '../service/serviceDadosPessoais';
import { cpf } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  formPessoal: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceDadosPessoais
  ) { }

  ngOnInit(): void {
    this.formPessoal = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]]
    })
  }
  onSubmit() {
    const num = this.formPessoal.value.cpf
    this.formPessoal.patchValue({
      cpf: cpf.format(num)
    })
    console.log(this.formPessoal.value)
    this.service.createDadosPessoaisByFuncionario(this.formPessoal.value).subscribe(value => {
      console.log(value)
      alert("Dados Pessoais salvo com sucesso!")
      this.formPessoal.reset()
    }, (erro: any) => alert("Erro ao salvar os dados!"))
  }
  verificaValidTouched(campo: any) {
    return !this.formPessoal.get(campo).valid && this.formPessoal.get(campo).touched
  }
  aplicaCssErro(campo: String) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}
