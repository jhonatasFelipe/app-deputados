import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import FilterDeputado from 'src/app/Classes/FilterDeputado';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})

export class SearchBarComponent implements OnInit {

  @Output() ChangeFilters = new EventEmitter();
  filtros:FilterDeputado = new FilterDeputado();


  constructor( public modalControl: ModalController) { }

  ngOnInit() {}

  async openModal(){
    const modal = await this.modalControl.create({
      component: FilterComponent
    });

    await modal.present();

    let {data ,role} = await modal.onWillDismiss();
    
    if(role === 'filtro'){
      this.filtros.siglaPartido = data.partidos;
      this.filtros.siglaUf = data.estados
      this.ChangeFilters.emit(this.filtros);
    }
  }

  findName(event:any){
    this.filtros.nome = event.detail.value;
    this.ChangeFilters.emit(this.filtros);
  }

}
