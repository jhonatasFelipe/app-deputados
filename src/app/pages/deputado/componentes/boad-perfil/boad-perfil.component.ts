import { Component, Input, OnInit } from '@angular/core';
import Deputado from 'src/app/Classes/Deputado';


@Component({
  selector: 'boad-perfil',
  templateUrl: './boad-perfil.component.html',
  styleUrls: ['./boad-perfil.component.scss'],
})
export class BoadPerfilComponent implements OnInit {

  @Input() deputado:Deputado;
  constructor() { }

  ngOnInit() {
  
  }

}
