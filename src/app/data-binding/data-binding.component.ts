import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent{

  url: any = "https://github.com/alan589";
  urlImagem: string = "http://lorempixel.com.br/400/200";
  cursoAngular: boolean = true;
  valorAtual: string = "";
  valorSalvo: string = "";
  isMouseOver: boolean = false;

  salvarConteudo(valor: string){
    this.valorSalvo = valor;
  }

  getCurtirCurso(){
    return true;
  }

  getValor(){
    return 1;
  }
  botaoClicado(){
    alert('Botão clicado!')
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  mouseOver(){
    this.isMouseOver = true;
  }

  mouseOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
