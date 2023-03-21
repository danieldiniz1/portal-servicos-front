import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ServiceDesligamento } from '../service/serviceDesligamento';

@Component({
  selector: 'app-desligamento',
  templateUrl: './desligamento.component.html',
  styleUrls: ['./desligamento.component.scss']
})
export class DesligamentoComponent implements OnInit {
  formDesligamento: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceDesligamento
    ) { }

  ngOnInit(): void {
    this.formDesligamento = this.formBuilder.group({
      nome: ['',[Validators.required]],
      sobrenome: ['', [Validators.required]],
      estaDesligado: ['false', [Validators.required]],
      devolucaoEquipamento: ['false', Validators.required],
      observacao: [''],
      dataAfastamento: [''],
      dataInforme: ['']
    })
  }
  onSubmit(){
    console.log(this.formDesligamento.value)
    const data = this.formDesligamento.value.dataAfastamento
    const dataInforme = this.formDesligamento.value.dataInforme
    this.formDesligamento.patchValue({
      dataAfastamento: data.split("-").reverse().join("/"),
      dataInforme: dataInforme.split("-").reverse().join("/")
    })
    this.service.createDesligamentoByFuncionario(this.formDesligamento.value).subscribe(value =>{
      console.log(value)
      alert("Desligamento salvo com sucesso!")
      this.formDesligamento.reset()}, (erro: any) => alert("Erro ao salvar so dados!"))
  }

}
