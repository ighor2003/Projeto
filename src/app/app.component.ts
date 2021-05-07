import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Produtos', url: 'produto', icon: 'grid' },
    { title: 'Meu carrinho', url: 'carrinho', icon: 'cart' },
    { title: 'Notificação', url: 'notificacao', icon: 'notifications' },
    { title: 'Encerrar', url: 'encerrar', icon: 'log-out' },
    
  ];
  
  constructor() {}
}
