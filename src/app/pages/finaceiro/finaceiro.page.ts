import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartConfiguration, ChartType } from 'chart.js';
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
  public data:ChartConfiguration['data'] = {
    datasets: [
    { 
      data:[], 
      label:'Despesas'
    },
  ],
  labels:['Jan', 'Fev','Mar', 'Abr', 'Mai', 'Jun','Jul','Ago','Set','Out','Nov','Dez']
  };
  public type: ChartType = 'bar'
  constructor(private service: DespesasService, private activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.idDeputado = this.activeRoute.snapshot.params.idDeputado;
    this.service.depesaspordeputado(this.idDeputado).subscribe((resp)=>{
      this.despesas = resp;
      this.initChart();
    });
  }

  initChart(){
    for(let i = 1; i<=12;i++){
      this.totalMes = 0;
      this.despesas.forEach((ele:Despesa)=>{
        if(ele.mes === i){
          this.totalMes = this.totalMes + ele.valorDocumento;
        }
      })
      this.data.datasets[0].data.push(this.totalMes);
    }
  }

}
