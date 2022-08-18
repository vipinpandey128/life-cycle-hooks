import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title2: string | number | Date = 0;
  title5:Date = new Date();
  title11:boolean = false;
  strArr:number[] =  [10,1,2,5,4,5,6];
  styleType:{} = "";
  color = '';
  FullName: string = "Ashok Kumar";
  Name: string = "Amit is good learner..";
  Status: string = "Sachin is always operating mobile while eating..";
  isDisabled:boolean = true;
  age:string = '25';
  todaydate = new Date();

  jsonVal = {name:'amit',age:25,address:{a1:'noida',a2:'gurgaon'}};

  months = ['Jan','Feb','Mar','April','May','Jun','July','Aug','Sep','Oct','Nov','Dec']

  allowServer = false;
  serverStatus = 'No Server is created';
  serverName=''
  username:string='Vipin Kumar Pandey';
  constructor()
  {
    //this.printValue();
    ///this.setStyle('italic');
    setTimeout(()=>{
      this.allowServer = true;
    },5000);
  }

  printValue()
  {
    console.log(this.strArr);
  }

  setStyle(type:string)
  {
    console.log("test");
    let style = {'font-style':type,'font-weight':'bold','font-size':'50px'};
    return style;
  }

  OnUpdateServerName(event:Event)
  {
      console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }

  private _userName:string = 'Vipin Pandey'
  get userName() : string{
    return this._userName;
  }
  set userName(val: string)
  {
    this._userName = val;
  }

}

