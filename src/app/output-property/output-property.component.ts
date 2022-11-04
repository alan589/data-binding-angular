import { Component, OnInit, Input, EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent{
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  incrementarValor(){
    this.valor += 10;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementarValor(){
    this.valor -= 10;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
