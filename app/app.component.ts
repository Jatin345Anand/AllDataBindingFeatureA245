import { Component,ViewChildren,QueryList,ViewChild } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(Child1Component)
  C1List:QueryList<Child1Component>;
   
  @ViewChild(Child2Component)
  C2Object:Child2Component;
  
  
    
  title = 'app';
  private DynamicTitleC1: string;
  private DynamicTitleC11: string;
  private DynamicTitleC12: string;
  private DynamicTitleC2: string;
  private DynamicTitleC21: string;
  private DynamicTitleC22: string;
  public DataFromC21:string;
  public DataFromC22:string;
  constructor() {
    this.DynamicTitleC1 = "CHILD1";
    this.DynamicTitleC11 = "CHILD11";
    this.DynamicTitleC12 = "CHILD12";
    this.DynamicTitleC2 = "CHILD2";
    this.DynamicTitleC21 = "CHILD21";
    this.DynamicTitleC22 = "CHILD22";

  }
  TakeDatafromChild1(data) {
    console.log("Data from Child ",data);
    this.DynamicTitleC1 = data;
  }
  TakeDatafromChild11(data) {
    console.log("Data from Child ",data);
    this.DynamicTitleC11 = data;
  }
  TakeDatafromChild12(data) {
    console.log("Data from Child ",data);
    this.DynamicTitleC12 = data;
  }
  TakeDatafromChild2(data) {
    console.log("Data from Child ",data);
    this.DynamicTitleC2 = data;
  }
  TakeDatafromChild21(data) {
    console.log("Data from Child ",data);
    this.DataFromC21=data;
    this.DynamicTitleC21 = data;
  }
  TakeDatafromChild22(data) {
    console.log("Data from Child ",data);
    this.DataFromC22=data;
    this.DynamicTitleC22 = data;
  }
  AccessChild1viaViewChildren(){
    this.C1List.forEach(C1=>{
     console.log("PC1Output = ",C1.PC1Output);
     console.log("dynamicTitleC1 ",C1.dynamicTitleC1);
     C1.C11List.forEach(C11=>{
     console.log("C11 dynamicTitleC11 =  ",C11.dynamicTitleC11);
     console.log("C11 PC11Output = ",C11.PC11Output);
     });
     C1.C12List.forEach(C12=>{
      console.log("C12 dynamicTitleC12 =  ",C12.dynamicTitleC12);
      console.log("C12 PC12Output = ",C12.PC12Output);
      }); 
    });
    // You can not access...
    //console.log(this.C1List.first.C11List.first.dynamicTitleC11);
    //console.log(this.C1List.first.C11Obj.dynamicTitleC11);

    //console.log(this.C1List.first.C12List.first.dynamicTitleC12);
    //console.log(this.C1List.first.C12Obj.dynamicTitleC12);
    // Only View Child You can access nested data of children...

    
  } 
  AccessChild2viaViewChild(){
    console.log("C2Object.dynamicTitleC2 = ",this.C2Object.dynamicTitleC2);
    console.log("C2Object.dynamicTitleC21 = ",this.C2Object.dynamicTitleC21);
    console.log("C2Object.dynamicTitleC22 = ",this.C2Object.dynamicTitleC22);
    console.log("C2Object.PC21Output = ",this.C2Object.PC21Output);
    console.log("C2Object.PC22Output = ",this.C2Object.PC22Output);
    console.log("C2Object.C21Object.dynamicTitleC21 = ",this.C2Object.C21Object.dynamicTitleC21);
    console.log("C2Object.C22Object.dynamicTitleC22 = ",this.C2Object.C22Object.dynamicTitleC22);
    
  }

}
