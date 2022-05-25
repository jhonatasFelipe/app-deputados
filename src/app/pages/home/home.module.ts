import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeputadosService } from 'src/app/services/deputados/deputados.service';
import { DeputadosApiService } from 'src/app/services/DepudatosApi/deputados-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  providers:[DeputadosService, DeputadosApiService],
  declarations: [HomePage]
})
export class HomePageModule {}
