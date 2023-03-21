import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-ferias',
  templateUrl: './ferias.component.html',
  styleUrls: ['./ferias.component.scss']
})
export class FeriasComponent implements OnInit {
  formFerias: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
    ) { }

  ngOnInit(): void {
    this.formFerias = this.formBuilder.group({
      estaDeFerias: ['nao', [Validators.required]],
      dataPrevisao: [''],
      dataEfetivacao: [''],
      dataRetorno: [''],
    })
  }
  onSubmit() { 
    console.log(this.formFerias.value)
    this.service.updateFerias(this.formFerias.value).subscribe(value =>{
      console.log(value)
      this.formFerias.reset()}, (erro: any) => alert("Erro"))
  }

}
