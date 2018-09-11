import { ViewChild, Component, OnInit,Input,Output,EventEmitter,ViewChildren,QueryList } from '@angular/core';
import { Child11Component } from './child11/child11.component';
import { Child12Component } from './child12/child12.component';
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() 
  PC1Output:EventEmitter<string> = new EventEmitter<string>();
  @Input('DynamicTitleC1')
  dynamicTitleC1:string;
  @ViewChildren(Child11Component)
  C11List:QueryList<Child11Component>;
  @ViewChildren(Child12Component)
  C12List:QueryList<Child12Component>;
  
  @ViewChild(Child11Component)
  C11Obj:Child11Component;
  @ViewChild(Child12Component)
  C12Obj:Child12Component;
  


  constructor() { }
 CallAppParent(){
   console.log('Call parent...');
    this.PC1Output.emit("This is Childe1.....");
  }
  ngOnInit() {
  }

}
