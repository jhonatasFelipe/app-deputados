import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Partido from 'src/app/Classes/Partido';
import Uf from 'src/app/Classes/Uf';
import { PartidosService } from 'src/app/services/partidos/partidos.service';
import { UfsService } from 'src/app/services/ufs/ufs.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit{

  partidos: Partido[] = [];
  estados : Uf[] = [];
  partidosSelecionados: string[] = [];
  estadosSelecionados: string[] = [];

  constructor(private modalControl:ModalController,
              private partidosService:PartidosService,
              private UfsServise:UfsService
              ) { }

  ngOnInit(): void {
    this.getPartidos();
    this.getEstados();
  }

  getPartidos(){
    this.partidosService.list().subscribe((partidos:Partido[])=>{
      this.partidos = partidos;
    });
  }

  getEstados(){
    this.UfsServise.list().subscribe((estados:Uf[])=>{
      this.estados = estados;
    })
  }

 modalDimiss(){
  this.modalControl.dismiss(null, 'fechar');
 }

 selecionaPartido(e){
  this.partidosSelecionados = e.detail.value;
 }

 selecionaEstado(e){
   this.estadosSelecionados = e.detail.value;
 }

 filtrar(){
  this.modalControl.dismiss(
    {
      partidos: this.partidosSelecionados, 
      estados: this.estadosSelecionados
    }, 'filtro');
 }

}
