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
    // console.log(this.form.value)
    this.servicePlanejamento.updatePlanejamento(this.formPlanejamento.value).subscribe(value =>{
      console.log(value)
      this.formPlanejamento.reset()}, (erro: any) => alert("Erro"))
      // this.service.newPlanejamento(this.formPlanejamento.value).subscribe(value => {
      //   console.log(value)
      //   alert(value)
      //   // this.formPlanejamento.reset()
      // }, (erro: any) => alert(erro))
  }
}
