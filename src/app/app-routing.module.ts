import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./pages/pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
  },
  {
    path:'pesquisa',
    loadChildren: ()=> import('./pages/pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
  },
  {
    path: 'deputado',
    loadChildren: () => import('./pages/deputado/deputado.module').then( m => m.DeputadoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
