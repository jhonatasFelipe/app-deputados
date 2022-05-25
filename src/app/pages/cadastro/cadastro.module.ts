import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, LoadingController } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';

import { SharedModule } from 'src/app/shared/shared.module';
import { ContaService } from 'src/app/services/conta/conta.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    SharedModule
  ],
  declarations: [CadastroPage],
  providers:[ContaService]
})
export class CadastroPageModule {}
