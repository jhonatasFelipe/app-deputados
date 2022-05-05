import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'capa-button',
  templateUrl: './capa-button.component.html',
  styleUrls: ['./capa-button.component.scss'],
})
export class CapaButtonComponent implements OnInit {
  @Input() excluir = false;
  constructor() { }

  ngOnInit() {}

}
