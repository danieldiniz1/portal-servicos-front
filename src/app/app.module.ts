import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormModule } from './data-form/data-form.module';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { FeriasComponent } from './ferias/ferias.component';
import { DesligamentoComponent } from './desligamento/desligamento.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DadosVivoComponent } from './dados-vivo/dados-vivo.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
