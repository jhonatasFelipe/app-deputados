import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../services/Status/status.service';
import Status from '../../Classes/Status';
import FilterDeputado from '../../Classes/FilterDeputado';
import { LoadingController, ToastController } from '@ionic/angular';
import Deputado from '../../Classes/Deputado';

@Component({
  selector: 'pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})

export class PesquisaPage implements OnInit {
  DeputadosSeguidos : Status[] = [];
  deputados : Status[];
  filter:FilterDeputado = new FilterDeputado([],[]);
  load : HTMLIonLoadingElement;
  toast:HTMLIonToastElement;
  constructor(private service:StatusService, 
    private loading:LoadingController,
    private toastController: ToastController) { }

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
    return this.service.getAll(this.filter).subscribe(async (deputados:Status[])=>{
    this.deputados = deputados;
    await this.load.dismiss();
    });
  }

  pesquisar(e){
    this.filter.siglaPartido = e.partidos;
    this.filter.siglaUf = e.estados;
    this.getDeputados();
  }

  async selcionaDeputado(deputado:Status){
    await this.initToast();
    this.toast.message = `Agora você está seguindo Deputado(a) ${deputado.nome}`;
    await this.toast.present();
    this.DeputadosSeguidos.push(deputado);
  }

  async deixarDeSeguir(deputado:Status){
    const index = this.DeputadosSeguidos.findIndex((deputadoSeguido)=>(deputadoSeguido.id === deputado.id));
    this.DeputadosSeguidos.splice(index,1);
    await this.initToast();
    this.toast.message = `Você deixou de seguir Deputado(a) ${deputado.nome}`;
    await this.toast.present();
  }

}
