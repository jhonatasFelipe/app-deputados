import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página inicial', url: '/home', icon: 'person' },
    { title: 'Gerenciamento', url: '/pesquisa', icon: 'search' },
  ];
  constructor() {}
}
