import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { DropdownService } from '../shared/services/dropdown.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup
  estaDesligadoOp: any[]
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private service: ServiceService
  ) {
  }

  ngOnInit() {

    this.estaDesligadoOp = this.dropdownService.getEstaDesligado()
    // this.formulario = new FormGroup({
    //   perfil: new FormControl(null),
    //   cargo: new FormControl(null),
    //   segmento: new FormControl(null),
    //   codigoSAP: new FormControl(null)
    // })

    this.formulario = this.formBuilder.group({
      perfil: ['', [Validators.nullValidator, Validators.required]],
      cargo: ['', [Validators.nullValidator, Validators.required]],
      segmento: ['', [Validators.nullValidator, Validators.required]],
      codigoSAP: ['', [Validators.nullValidator, Validators.required]],
      desligamento: this.formBuilder.group({
        estaDesligado: ['', [Validators.required]],
        devolucaoEquipamento: ['', Validators.required],
        observacao: [''],
        dataAfastamento: [''],
        dataInforme: ['']
      }),
      ferias: this.formBuilder.group({
        estaDeFerias: ['', [Validators.required]],
        dataPrevisao: [''],
        dataEfetivacao: [''],
        dataRetorno: [''],
      }),
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
        acesso: ['', [Validators.required]],
        acessoJira: ['', [Validators.required]],
        acessoGitLab: ['', [Validators.required]],
        acessoWiki: ['', [Validators.required]]
      })
    })

  }
  onSubmit() {
    console.log(this.formulario.value)
    this.service.salvar(this.formulario.value).subscribe(value =>{
      console.log(value)
      this.formulario.reset()}, (erro: any) => alert("Erro"))

    // this.http.post('http://localhost:8080/api/v1/funcionario', JSON.stringify(this.formulario.value))
    //   .subscribe(dados => {
    //     console.log(dados)
    //     this.formulario.reset()
    //   }, (erro: any) => alert("Erro"))
  }

  // verificaValidTouched(campo: String){
  // return !this.formulario.get(campo).valid && this.formulario.get(campo).touched
  // }

  // aplicaCssErro(campo: String){
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
