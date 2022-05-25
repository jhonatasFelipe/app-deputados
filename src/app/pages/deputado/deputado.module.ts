import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeputadoPageRoutingModule } from './deputado-routing.module';

import { DeputadoPage } from './deputado.page';
import { SharedModule } from '../../shared/shared.module';
import { BoadPerfilComponent } from './componentes/boad-perfil/boad-perfil.component'
import { DeputadosService } from 'src/app/services/deputados/deputados.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeputadoPageRoutingModule,
    SharedModule,
  ],
  declarations: [DeputadoPage, BoadPerfilComponent],
  providers:[DeputadosService]
})
export class DeputadoPageModule {}
