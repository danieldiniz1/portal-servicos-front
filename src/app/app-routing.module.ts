import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtestadosComponent } from './atestados/atestados.component';
import { CertificacaoComponent } from './certificacao/certificacao.component';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DadosVivoComponent } from './dados-vivo/dados-vivo.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { DesligamentoComponent } from './desligamento/desligamento.component';
import { FeriasComponent } from './ferias/ferias.component';
import { PlanejamentoSemanalComponent } from './planejamento-semanal/planejamento-semanal.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Routes = [
  
    {path: 'telaPrincipal', component: TelaPrincipalComponent},
    {path: 'funcionarios', component: FuncionariosComponent},
    {path: 'ferias', component: FeriasComponent},
    {path: 'desligamento', component: DesligamentoComponent},
    {path: 'dadosPessoais', component: DadosPessoaisComponent},
    {path: 'dadosVivo', component: DadosVivoComponent},
    {path: 'planejamentoSemanal', component: PlanejamentoSemanalComponent},
    {path: 'certificacao', component: CertificacaoComponent},
    {path: 'atestados', component: AtestadosComponent},
    {path: '', pathMatch: 'full' , redirectTo: 'telaPrincipal'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
