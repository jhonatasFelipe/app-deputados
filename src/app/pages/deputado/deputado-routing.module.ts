import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeputadoPage } from './deputado.page';

const routes: Routes = [
  {
    path: '',
    component: DeputadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeputadoPageRoutingModule {}
