import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ServicePlanejamento } from '../service/servicePlanejamento';

@Component({
  selector: 'app-planejamento-semanal',
  templateUrl: './planejamento-semanal.component.html',
  styleUrls: ['./planejamento-semanal.component.scss']
})
export class PlanejamentoSemanalComponent implements OnInit {
  formPlanejamento: FormGroup
  // form: FormGroup
 
  constructor(
    private formBuilder: FormBuilder,
    // private service: ServiceService,
    private servicePlanejamento: ServicePlanejamento) { }

  ngOnInit(): void {
    //  this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   sobrenome: new FormControl(null)
    //  }),
    this.formPlanejamento = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      titulo: [''],
      descricao: [''],
      dataInicio: [''],
      dataFinalizacao: ['']
    })
  }
  onSubmit(){
    console.log(this.formPlanejamento.value)
    const dataPrev = this.formPlanejamento.value.dataInicio
    const dataEfet = this.formPlanejamento.value.dataFinalizacao
    this.formPlanejamento.patchValue({
      dataInicio: dataPrev.split("-").reverse().join("/"),
      dataFinalizacao: dataEfet.split("-").reverse().join("/")
    })
    this.servicePlanejamento.updatePlanejamento(this.formPlanejamento.value).subscribe(value =>{
      console.log(value)
      alert("Planejamento salvo com sucesso!")
      this.formPlanejamento.reset()}, (erro: any) => alert("Erro ao salvar os dados!"))
  }
}
