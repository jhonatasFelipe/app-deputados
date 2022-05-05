import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/Status/status.service';
import Status from '../Classes/Status';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {
  DeputadosSeguidos : Status[];
  deputados : Status[];
  constructor(private service:StatusService) { }

  ngOnInit() {
    this.getDeputados();
  }

  getDeputados(){
    return this.service.getAll().subscribe((deputados:Status[])=>{
      this.deputados = deputados;
    });
  }

}
