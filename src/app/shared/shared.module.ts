import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CapaComponent } from './capa/capa.component';



@NgModule({
  declarations: [CabecalhoComponent, CapaComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CabecalhoComponent,
    CapaComponent
  ]
})
export class SharedModule { }
