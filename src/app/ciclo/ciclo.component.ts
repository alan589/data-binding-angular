import { Component, 
  OnInit, 
  OnChanges,
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit,
  OnDestroy,
  Input} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements 
OnChanges, 
OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewChecked, 
AfterViewInit,
OnDestroy {

  @Input() valorInicial: number = 10;

 
  constructor() {
    this.log("constructor");
  }

  log(msg: string) {
    console.log(msg);
    
  }
   ngOnChanges() {
    this.log('ngOnChanges')
   }
 
  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  ngAfterViewInit(): void {
    this.log("ngAfterViewInit");
  }
}
