import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-desligamento',
  templateUrl: './desligamento.component.html',
  styleUrls: ['./desligamento.component.scss']
})
export class DesligamentoComponent implements OnInit {
  formDesligamento: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
    ) { }

  ngOnInit(): void {
    this.formDesligamento = this.formBuilder.group({
      estaDesligado: ['nao', [Validators.required]],
      devolucaoEquipamento: ['nao', Validators.required],
      observacao: [''],
      dataAfastamento: [''],
      dataInforme: ['']
    })
  }
  onSubmit(){
    console.log(this.formDesligamento.value)
    this.service.updateDesligamento(this.formDesligamento.value).subscribe(value =>{
      console.log(value)
      this.formDesligamento.reset()}, (erro: any) => alert("Erro"))
  }

}
