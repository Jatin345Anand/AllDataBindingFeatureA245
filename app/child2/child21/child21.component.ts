import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child21',
  templateUrl: './child21.component.html',
  styleUrls: ['./child21.component.css']
})
export class Child21Component implements OnInit {
  @Output() 
  PC21Output:EventEmitter<string> = new EventEmitter<string>();
  @Input('dynamicTitleC21')
  dynamicTitleC21:string;
  
  constructor() { }
  CallAppParent(){
    this.PC21Output.emit("This is Childe21 .....");
  }
  ngOnInit() {
  }

}
