import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeputadoPageRoutingModule } from './deputado-routing.module';

import { DeputadoPage } from './deputado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeputadoPageRoutingModule
  ],
  declarations: [DeputadoPage]
})
export class DeputadoPageModule {}
