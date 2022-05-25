import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinaceiroPageRoutingModule } from './finaceiro-routing.module';

import { FinaceiroPage } from './finaceiro.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DespesasService } from 'src/app/services/depesas/despesas.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinaceiroPageRoutingModule,
    SharedModule,
  ],
  declarations: [FinaceiroPage],
  providers:[DespesasService]
})
export class FinaceiroPageModule {}
