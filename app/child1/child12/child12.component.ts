import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child12',
  templateUrl: './child12.component.html',
  styleUrls: ['./child12.component.css']
})
export class Child12Component implements OnInit {
  @Output() 
  PC12Output:EventEmitter<string> = new EventEmitter<string>();
  @Input('DynamicTitleC12')
  dynamicTitleC12:string;
  
  constructor() { }
  CallAppParent(){
    this.PC12Output.emit("This is Childe12 .....");
  }
  ngOnInit() {
  }

}
