import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  // inputs: ['nomeCurso: nome']
  // inputs: ['nomeCurso']
})
export class InputPropertyComponent implements OnInit {
  @Input() nomeCurso: string = '';
  // @Input('nome') nomeCurso: string = '';
  // de preferência ao input declarado aqui, assim fica mais fácil saber o que é variavel e o que é input
  constructor() { }

  ngOnInit(): void {
  }

}
