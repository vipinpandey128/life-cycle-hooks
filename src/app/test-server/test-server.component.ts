import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-server',
  templateUrl: './test-server.component.html',
  styleUrls: ['./test-server.component.css']
})
export class TestServerComponent implements OnInit {

  servers:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  AddServer()
  {
    this.servers.push('New Server Added!');
    console.log("clicked");
  }

  RemoveServer(i : number)
  {
    console.log("li clicked");
    this.servers.splice(i+1,1);
  }

}
