import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
  <h1>Life Cycle Hooks</h1>
  <br/>
  <input type="text" name="message" [(ngModel)]="message" autocomplete="off"/>
  <br/>
  <input type="text" name="content" [(ngModel)]="content" autocomplete="off"/>
  <br/>
  <input type="checkbox" name="hideChild" [(ngModel)]="hideChild" autocomplete="off"/>
  <br/>
  <br/>
  <app-child [message]="message" *ngIf="!hideChild"> 
    <b>{{content}}</b>
  </app-child>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
message = "Hello";
content = "Hello";
hideChild = false;
  constructor() { 

    console.log("Home Constructor Invoked!!");

  }

  ngOnChange()
  {
    console.log("Home ngOnChange Invoked!!");
  }

  ngOnInit(): void {

    console.log("Home NgOnInit!");
  }

  ngDoCheck() {

    console.log("Home ngDoCheck!");
  }

  ngAfterContentInit() {

    console.log("Home ngAfterContentInit!");
  }

  ngAfterContentChecked() {

    console.log("Home ngAfterContentChecked!");
  }

  ngAfterViewInit(): void {

    console.log("Home ngAfterViewInit!");
  }

  ngAfterViewChecked(): void {

    console.log("Home ngAfterViewChecked!");
  }

  ngOnDestroy()
  {
    console.log("Home ngOnDestroy!");
  }



}
