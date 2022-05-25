import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DeputadoApi from 'src/app/Classes/DeputadoApi';
import Status from 'src/app/Classes/Status';
import { DeputadosApiService } from 'src/app/services/DepudatosApi/deputados-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  deputadosSeguidos: Status[] | DeputadoApi[];
  usuario:string = localStorage.getItem('user'); 
  constructor(private service: DeputadosApiService, private router:Router) { }

  ngOnInit() {
    this.getDeputadosSeguidos();
  }

  goToProfile(id:number){
    this.router.navigate(['deputado', id]);
  }

  getDeputadosSeguidos(){
    this.service.seguindo(this.usuario).subscribe((resp)=>{
      this.deputadosSeguidos = resp;
    });
  }

}
