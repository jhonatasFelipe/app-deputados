import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesquisaPageRoutingModule } from './pesquisa-routing.module';

import { PesquisaPage } from './pesquisa.page';
import { SharedModule } from '../shared/shared.module';
import { DeputadosService } from '../services/deputados/deputados.service';
import { HttpClientModule} from '@angular/common/http'
import { GenericService } from '../services/GenericService';
import { StatusService } from '../services/Status/status.service';
import { PartidosService } from '../services/partidos/partidos.service';
import { UfsService } from '../services/ufs/ufs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesquisaPageRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [PesquisaPage],
  providers:[DeputadosService, StatusService, PartidosService, UfsService]
})
export class PesquisaPageModule {}
