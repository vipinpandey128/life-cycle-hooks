import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  @Input() messageData:string="";
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit Method Called!!"+this.messageData);
  }

  ngDoCheck()
  {
    console.log("ngDoCheck - - Transfer Method Called!!"+this.messageData);
  }

}
