import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding';
  valor: number = 100;
  deletarCiclo: boolean = false;
  destruirCiclo(){

    this.deletarCiclo = true;
  }
  mudarValor(){
    this.valor++;
  }
}
