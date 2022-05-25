import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CapaComponent } from './capa/capa.component';
import { CapaButtonComponent } from './capa-button/capa-button.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterComponent } from './filter/filter.component';
import { SelecterComponent } from './selecter/selecter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CabecalhoComponent, 
    CapaComponent,
    CapaButtonComponent,
    SearchBarComponent,
    FilterComponent,
    SelecterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
  ],
  exports:[
    CabecalhoComponent,
    CapaComponent, 
    CapaButtonComponent,
    SearchBarComponent,
    FilterComponent,
    SelecterComponent,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule
  ]
})
export class SharedModule { }
