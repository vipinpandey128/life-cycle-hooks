import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-grandchild',
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
  <h3>Granch Child Comp</h3>
  <br>
  Name {{customer.name}}
  `,
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {
@Input() customer:Customer = new Customer();
constructor() { 
  console.log("Grand : Constructor Invoked!!");
}

ngOnChange()
{
  console.log("Grand : ngOnChange Invoked!!");
}

ngOnInit(): void {

  console.log("Grand : NgOnInit!");
}

ngDoCheck() {

  console.log("Grand : ngDoCheck!");
}

ngAfterContentInit() {

  console.log("Grand : ngAfterContentInit!");
}

ngAfterContentChecked() {

  console.log("Grand : ngAfterContentChecked!");
}

ngAfterViewInit(): void {

  console.log("Grand : ngAfterViewInit!");
}

ngAfterViewChecked(): void {

  console.log("Grand : ngAfterViewChecked!");
}

ngOnDestroy()
{
  console.log("Grand : ngOnDestroy!");
}

}
