import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeputadosService } from '../services/deputados/deputados.service';
import { StatusService } from '../services/Status/status.service';

import { PesquisaPage } from './pesquisa.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[StatusService, DeputadosService],
})
export class PesquisaPageRoutingModule {}
