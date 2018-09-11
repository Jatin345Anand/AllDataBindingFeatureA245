import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CustomService } from '../../custom.service';
import { Product } from '../../product';
@Component({
  selector: 'app-child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.css']
})
export class Child11Component implements OnInit {
  @Output() 
  PC11Output:EventEmitter<string> = new EventEmitter<string>();
  @Input('DynamicTitleC11')
  dynamicTitleC11:string;
  
  name:string;
  price:number;
  flag:boolean;

  constructor(private CS:CustomService) {
     
  }
  
  CallAppParent(){
    console.log('Call parent');
    this.PC11Output.emit("This is Childe11 .....");

  }
  CallService(event):void{
   this.name = this.CS.getString();
   this.flag = this.CS.getFlag();
   this.price = this.CS.getInt();
  }
  ngOnInit() {
  }

}
