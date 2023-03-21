import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';
import { ServiceService } from '../service.service';
import { ServiceFuncionario } from '../service/serviceFuncionario';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  formulario: FormGroup
  estaDesligadoOp: any[]
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private service: ServiceFuncionario
  ) {
  }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      perfil: ['', [Validators.nullValidator, Validators.required]],
      cargo: ['', [Validators.nullValidator, Validators.required]],
      segmento: ['', [Validators.nullValidator, Validators.required]],
      codigoSAP: ['', [Validators.nullValidator, Validators.required]],
      dadosPessoais: this.formBuilder.group({
        nome: ['', [Validators.required]],
        sobrenome: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', [Validators.required]]
      }),
      dadosVivo: this.formBuilder.group({
          contrato: ['', [Validators.required]],
          sUser: ['', [Validators.required]],
          acesso: ['false', [Validators.required]],
          acessoJira: ['false', [Validators.required]],
          acessoGitLab: ['false', [Validators.required]],
          acessoWiki: ['false', [Validators.required]]
        }),
    })

  }
  onSubmit() {
    console.log(this.formulario.value)
    const num = this.formulario.value.dadosPessoais.cpf
    this.formulario.patchValue({
      cpf: cpf.format(num)
    })
    this.service.createFuncionario(this.formulario.value).subscribe(value =>{
      console.log(value)
      alert("Funcionário salvo com sucesso!")
      this.formulario.reset()}, (erro: any) => alert("Erro ao salvar os dados!"))

    // this.http.post('http://localhost:8080/api/v1/funcionario', JSON.stringify(this.formulario.value))
    //   .subscribe(dados => {
    //     console.log(dados)
    //     this.formulario.reset()
    //   }, (erro: any) => alert("Erro"))
  }

  verificaValidTouched(campo: any){
  return !this.formulario.get(campo).valid && this.formulario.get(campo).touched
  }

  // aplicaCssErro(campo: any){
  //   return {
  //     'has-error': this.verificaValidTouched(campo),
  //     'has-feedback': this.verificaValidTouched(campo)
  //   }
  // }

  //  verificaEmailInvalido(){
  //   let campoEmail = this.formulario.get('email');
  //     if(campoEmail.errors){
  //       return campoEmail.errors['email'] && campoEmail.touched
  //     }
  //  }
}
