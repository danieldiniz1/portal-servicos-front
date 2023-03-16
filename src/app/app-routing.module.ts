import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DadosVivoComponent } from './dados-vivo/dados-vivo.component';
import { DataFormComponent } from './data-form/data-form.component';
import { DesligamentoComponent } from './desligamento/desligamento.component';
import { FeriasComponent } from './ferias/ferias.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Routes = [
  
    {path: 'telaPrincipal', component: TelaPrincipalComponent},
    {path: 'data-form', component: DataFormComponent},
    {path: 'ferias', component: FeriasComponent},
    {path: 'desligamento', component: DesligamentoComponent},
    {path: 'dadosPessoais', component: DadosPessoaisComponent},
    {path: 'dadosVivo', component: DadosVivoComponent},
    {path: '', pathMatch: 'full' , redirectTo: 'telaPrincipal'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
