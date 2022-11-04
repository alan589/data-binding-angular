import { Component, OnInit, Input, EventEmitter,  Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent{
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();
  // @ViewChild('campoInput') campoValorInput: ElementRef | undefined;
  @ViewChild('campoInput', {static: false}) campoValorInput!: ElementRef



  incrementarValor(){
    console.log(this.campoValorInput?.nativeElement.value);
    this.valor += 10;
    this.mudouValor.emit({novoValor: this.valor});
  }
  decrementarValor(){
    console.log(this.campoValorInput?.nativeElement.value);
    this.valor -= 10;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
