import { Component, OnInit,Input,Output,EventEmitter,ViewChild } from '@angular/core';
import {Child21Component} from './child21/child21.component';
import {Child22Component} from './child22/child22.component'; 
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() 
  PC2Output:EventEmitter<string> = new EventEmitter<string>();
  @Input('DynamicTitleC2')
  dynamicTitleC2:string;
  @Input('DynamicTitleC21')
  dynamicTitleC21:string;
  @Input('DynamicTitleC22') 
  dynamicTitleC22:string;
  @Output() 
  PC21Output:EventEmitter<string> = new EventEmitter<string>();
  @Output() 
  PC22Output:EventEmitter<string> = new EventEmitter<string>();
  
  @ViewChild(Child21Component)
  C21Object:Child21Component;
  @ViewChild(Child22Component)
  C22Object:Child22Component;
  
  
  constructor() { }
  // CallC2Parent(){
  //   this.C2C21Output.emit(this.dynamicTitleC21);
  // }
  // CallC2Parent(){
  //   this.C2C22Output.emit(this.dynamicTitleC22);
  // }
  takeDataFromC21(data){
    console.log("Data from c21 in c2",data);
    this.PC21Output.emit(data); 
  }
  takeDataFromC22(data){
    console.log("Data from c22 in c2",data);
    this.PC22Output.emit(data);  
  }
  CallAppParent(){
    this.PC2Output.emit("This is Childe2 .....");
  }
  ngOnInit() {
  }

}
