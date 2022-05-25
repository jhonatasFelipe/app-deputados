import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '',   redirectTo: 'finaceiro/204413', pathMatch: 'full' },
  // {
  //   path:'',
  //   loadChildren: ()=> import('./pages/deputado/deputado.module').then( m => m.DeputadoPageModule)
  // },
  {
    path:'pesquisa',
    loadChildren: ()=> import('./pages/pesquisa/pesquisa.module').then( m => m.PesquisaPageModule)
  },
  {
    path: 'deputado/:id',
    loadChildren: () => import('./pages/deputado/deputado.module').then( m => m.DeputadoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'finaceiro/:idDeputado',
    loadChildren: () => import('./pages/finaceiro/finaceiro.module').then( m => m.FinaceiroPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
