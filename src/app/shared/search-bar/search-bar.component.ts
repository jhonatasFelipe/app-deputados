import { Component, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor( public modalControl: ModalController) { }

  ngOnInit() {}

  async openModal(){
    const modal = await this.modalControl.create({
      component: FilterComponent
    });

    await modal.present();
  }

}
