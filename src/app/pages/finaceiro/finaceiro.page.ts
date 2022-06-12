import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsConfiguration } from 'ng2-charts';
import Despesa from 'src/app/Classes/Despesa';
import { DespesasService } from 'src/app/services/depesas/despesas.service';

@Component({
  selector: 'app-finaceiro',
  templateUrl: './finaceiro.page.html',
  styleUrls: ['./finaceiro.page.scss'],
})
export class FinaceiroPage implements OnInit {
  public idDeputado:number;
  public despesas:Despesa[];
  public totalMeses:number[] = [];
  public totalMes:number = 0;
  public despesasAgupadasPorMes:Array<Despesa[]> = [];
  public meses: string[] = [
    'Janeiro', 
    'Fevereiro',
    'Março', 
    'Abril', 
    'Maio', 
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novenbro',
    'Dezenbro'
  ];
  public data:ChartConfiguration['data'];
  public type: ChartType = 'bar'
  constructor(private service: DespesasService, private activeRoute:ActivatedRoute) { }

  async ngOnInit() {
    this.idDeputado = this.activeRoute.snapshot.params.idDeputado;
    await this.getDespesas();
   
  }

  getDespesas(){
    this.service.depesaspordeputado(this.idDeputado).subscribe( async(resp)=>{
      this.despesas = resp;
      this.initChart();
      this.groupDespesasByMonth();
    });
  }

  initChart(){
    let result:number[] = [];
    for(let i = 1; i<=12;i++){
      this.totalMes = 0;
      this.despesas.forEach((ele:Despesa)=>{
        if(ele.mes === i){
          this.totalMes = this.totalMes + ele.valorDocumento;
        }
      })
      result.push(this.totalMes);
    }

    this.data = {
      datasets: [
      { 
        data: result, 
        label:'Despesas',
        backgroundColor: ['rgba(8, 226, 92, 0.507)']
      },
    ],
    labels:['Jan', 'Fev','Mar', 'Abr', 'Mai', 'Jun','Jul','Ago','Set','Out','Nov','Dez']
    };
  }

  groupDespesasByMonth(){
    let group;
    for(let i = 1; i<=12;i++){
       group = [];
      this.despesas.forEach((ele:Despesa)=>{
        if(ele.mes === i){
          group.push(ele);
        }
      })
      this.despesasAgupadasPorMes.push(group);
    }
  }

}
