import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ServiceFerias } from '../service/serviceFerias';

@Component({
  selector: 'app-ferias',
  templateUrl: './ferias.component.html',
  styleUrls: ['./ferias.component.scss']
})
export class FeriasComponent implements OnInit {
  formFerias: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceFerias
    ) { }

  ngOnInit(): void {
    this.formFerias = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]],
      estaDeFerias: ['false', [Validators.required]],
      dataPrevisao: [''],
      dataEfetivacao: [''],
      dataRetorno: [''],
    })
  }
  onSubmit() { 
    const dataPrev = this.formFerias.value.dataPrevisao
    const dataEfet = this.formFerias.value.dataEfetivacao
    const dataRet = this.formFerias.value.dataRetorno
    this.formFerias.patchValue({
      dataPrevisao: dataPrev.split("-").reverse().join("/"),
      dataEfetivacao: dataEfet.split("-").reverse().join("/"),
      dataRetorno: dataRet.split("-").reverse().join("/")
    })
    console.log(this.formFerias.value)
    this.service.createFeriasByFuncionario(this.formFerias.value).subscribe(value =>{
      console.log(value)
      alert("Férias salva com sucesso!")
      this.formFerias.reset()}, (erro: any) => alert("Erro ao salvar os dados!"))
  }

}
