import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ServiceDadosVivo } from '../service/serviceDadosVivo';

@Component({
  selector: 'app-dados-vivo',
  templateUrl: './dados-vivo.component.html',
  styleUrls: ['./dados-vivo.component.scss']
})
export class DadosVivoComponent implements OnInit {
  formVivo: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceDadosVivo
  ) { }

  ngOnInit(): void {
    this.formVivo = this.formBuilder.group({
      nome: ['',[Validators.required]],
      sobrenome: ['', [Validators.required]],
      contrato: ['', [Validators.required]],
      user: ['', [Validators.required]],
      acesso: ['false', [Validators.required]],
      acessoJira: ['false', [Validators.required]],
      acessoGitLab: ['false', [Validators.required]],
      acessoWiki: ['false', [Validators.required]]
    })
  }
  onSubmit() {
    console.log(this.formVivo.value)
    this.service.createDadosVivoByFuncionario(this.formVivo.value).subscribe(value => {
      console.log(value)
      alert("Dados vivo salvos com sucesso!")
      this.formVivo.reset()
    }, (erro: any) => alert("Erro ao salvar os dados!"))
  }
  verificaValidTouched(campo: any) {
    return !this.formVivo.get(campo).valid && this.formVivo.get(campo).touched
  }
}
