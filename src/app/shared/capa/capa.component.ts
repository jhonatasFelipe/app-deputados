import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import Status from 'src/app/Classes/Status';
import { Partidos } from 'src/app/Enums/Partidos';
import { Estados } from 'src/app/Enums/Estados';
import DeputadoApi from 'src/app/Classes/DeputadoApi';

@Component({
  selector: 'capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.scss'],
})
export class CapaComponent implements OnInit, OnChanges {
  @Input() deputado : Status | DeputadoApi;
  @Input() active: boolean = false;
  @Input() action: boolean = false;
  imagemPartido: string;
  imagemEstado: string;
  constructor() { }

  ngOnInit() {
  
  }

  ngOnChanges(): void {
    this.imagemPartido = Partidos[this.deputado.siglaPartido];
    this.imagemEstado = Estados[this.deputado.siglaUf];
  }

}
