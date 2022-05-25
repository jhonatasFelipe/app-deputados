import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/Status/status.service';
import Status from '../../Classes/Status';
import FilterDeputado from '../../Classes/FilterDeputado';
import { LoadingController, ToastController } from '@ionic/angular';
import DeputadoApi from 'src/app/Classes/DeputadoApi';
import { DeputadosApiService } from 'src/app/services/DepudatosApi/deputados-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})

export class PesquisaPage implements OnInit {
  usuario = localStorage.getItem('user');
  deputadosSeguidos: DeputadoApi[];
  deputados : Status[];
  filter:FilterDeputado = new FilterDeputado();
  load : HTMLIonLoadingElement;
  toast:HTMLIonToastElement;
  constructor(private service:StatusService, 
    private loading:LoadingController,
    private toastController: ToastController,
    private DeputadosApiService:DeputadosApiService) { }

  ngOnInit() {
    this.getDeputados();
  }

  async initLoading(){
    this.load =  await this.loading.create({
      spinner:"circular",
      showBackdrop: true,
      message: "Carregando Deputados...",
      translucent: true
    });
  }

  async initToast(){
    this.toast =  await this.toastController.create({
      message:"Deputado a dicionado a sua Lista",
      duration: 2000,
    });
  }

  async getDeputados(){
    await this.initLoading();
    await this.load.present();
    forkJoin({
      todosdeputados: this.service.getAll(this.filter),
      DeputadosSeguidos: this.DeputadosApiService.seguindo(this.usuario)
    }).subscribe(async resultado=>{
      this.deputados = resultado.todosdeputados;
      this.deputadosSeguidos = resultado.DeputadosSeguidos;
      await this.load.dismiss();
    });
  }

  pesquisar(e:FilterDeputado){
    this.filter = e;
    this.getDeputados();
  }

  async selcionaDeputado(deputado:Status){
    await this.initToast();
    
    this.DeputadosApiService.Seguir(this.usuario, deputado.id).subscribe(
      async(resp)=>{
        this.toast.message = `Agora você está seguindo Deputado(a) ${deputado.nome}`;
        await this.toast.present();
        this.getDeputados();
    });
    
  }

  async deixarDeSeguir(deputado:Status){
    await this.initToast();
   this.DeputadosApiService.deixardeSeguir(this.usuario, deputado.id).subscribe(
     async ()=>{
      this.toast.message = `Você deixou de seguir Deputado(a) ${deputado.nome}`;
      await this.toast.present();
      this.getDeputados();
   });
   
    
  }

}
