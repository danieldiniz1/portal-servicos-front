import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  formPessoal: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
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
    console.log(this.formPessoal.value)
    this.service.updatePessoal(this.formPessoal.value).subscribe(value => {
      console.log(value)
      this.formPessoal.reset()
    }, (erro: any) => alert("Erro"))
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
