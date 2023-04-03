import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosComponent } from './funcionarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TelaPrincipalComponent } from '../tela-principal/tela-principal.component';
import { DadosPessoaisComponent } from '../dados-pessoais/dados-pessoais.component';
import { DadosVivoComponent } from '../dados-vivo/dados-vivo.component';
import { DesligamentoComponent } from '../desligamento/desligamento.component';
import { FeriasComponent } from '../ferias/ferias.component';
import { AtestadosComponent } from '../atestados/atestados.component';
import { CertificacaoComponent } from '../certificacao/certificacao.component';
import { PlanejamentoSemanalComponent } from '../planejamento-semanal/planejamento-semanal.component';



@NgModule({
  declarations: [
    FuncionariosComponent,
    TelaPrincipalComponent,
    FeriasComponent,
    DesligamentoComponent,
    DadosPessoaisComponent,
    DadosVivoComponent,
    AtestadosComponent,
    CertificacaoComponent,
    PlanejamentoSemanalComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FuncionariosModule { }
