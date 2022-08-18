import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-child',
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
  <h2>Child Component</h2>
  <br/>
  
  <!--Data as a input -->
Message from parent via @input {{message}}
<br><br>
<!-- Inject Content-->

Message from Parent via content injection

<ng-content></ng-content>
<br>
<br>
<br>
Code: 
<input type="checkbox" name="code" [(ngModel)]="customer.code" autocomplete="off"/>
<br><br>

Name :
<input type="checkbox" name="name" [(ngModel)]="customer.name" autocomplete="off"/>

<app-grandchild [customer]="customer"> </app-grandchild>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() message:string='';
customer:Customer = new Customer()

  constructor() { 
    console.log("Child : Constructor Invoked!!");
  }

  ngOnChange()
  {
    console.log("Child : ngOnChange Invoked!!");
  }

  ngOnInit(): void {

    console.log("Child : NgOnInit!");
  }

  ngDoCheck() {
    console.log("Child : ngDoCheck!"+this.message);
    console.log("Child : ngDoCheck!");
  }

  ngAfterContentInit() {

    console.log("Child : ngAfterContentInit!");
  }

  ngAfterContentChecked() {

    console.log("Child : ngAfterContentChecked!");
  }

  ngAfterViewInit(): void {

    console.log("Child : ngAfterViewInit!");
  }

  ngAfterViewChecked(): void {

    console.log("Child : ngAfterViewChecked!");
  }

  ngOnDestroy()
  {
    console.log("Child : ngOnDestroy!");
  }

}
