import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeusDeputadosComponent } from './meus-deputados/meus-deputados.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';


const routes: Routes = [
  {
    path: 'pesquisa',
    component: PesquisaComponent
  },
  {
    path: 'deputados',
    component: MeusDeputadosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}