import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dados-vivo',
  templateUrl: './dados-vivo.component.html',
  styleUrls: ['./dados-vivo.component.scss']
})
export class DadosVivoComponent implements OnInit {
  formVivo: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.formVivo = this.formBuilder.group({
      contrato: ['', [Validators.required]],
      sUser: ['', [Validators.required]],
      acesso: ['', [Validators.required]],
      acessoJira: ['', [Validators.required]],
      acessoGitLab: ['', [Validators.required]],
      acessoWiki: ['', [Validators.required]]
    })
  }
  onSubmit() {
    console.log(this.formVivo.value)
    this.service.updateVivo(this.formVivo.value).subscribe(value => {
      console.log(value)
      this.formVivo.reset()
    }, (erro: any) => alert("Erro"))
  }
  verificaValidTouched(campo: any) {
    return !this.formVivo.get(campo).valid && this.formVivo.get(campo).touched
  }
}
