import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Test2',
  templateUrl: './Test2.component.html',
  styleUrls: ['./Test2.component.css']
})
export class Test2Component implements OnInit {

  name:string = "vipin kumar pandey";

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck()
  {
    console.log("ngDoChek Test2 Method Called!!"+this.name);
  }

}
