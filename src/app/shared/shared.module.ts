import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';



@NgModule({
  declarations: [CabecalhoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CabecalhoComponent
  ]
})
export class SharedModule { }
