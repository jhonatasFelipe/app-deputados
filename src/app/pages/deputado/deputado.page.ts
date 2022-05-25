import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Deputado from 'src/app/Classes/Deputado';
import { DeputadosService } from 'src/app/services/deputados/deputados.service';

@Component({
  selector: 'app-deputado',
  templateUrl: './deputado.page.html',
  styleUrls: ['./deputado.page.scss'],
})
export class DeputadoPage implements OnInit {
  deputado:Deputado;
  constructor(protected service:DeputadosService, private routeActive:ActivatedRoute) { }

  ngOnInit() {
    const id = this.routeActive.snapshot.params.id;
    this.service.getDeputadoById(id).subscribe((deputado:Deputado)=>{
      this.deputado = deputado;
    });
  }

}
