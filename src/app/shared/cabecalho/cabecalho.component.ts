import { Component, OnInit } from '@angular/core';
import User from 'src/app/Classes/User';

@Component({
  selector: 'cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {

  user:User = new User();
  constructor() { }

  ngOnInit() {
    this.user.fullName = localStorage.getItem('fullName');
  }

}
