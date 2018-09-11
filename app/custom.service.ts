import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class CustomService {
  public Int:number
  public String:string
  public Flag:boolean
  public PRODUCT:Product;
  public PRODUCTARRAY:Product[];
  constructor() {
    this.PRODUCTARRAY=[];
  }
  setInt(Value):void{
    this.Int=Value;
  }
  getInt():number{
   return this.Int;
  }
  setString(Value):void{
    this.String=Value;
  }
  getString():string{
   return this.String;
  }
  setFlag(Value):void{
    this.Flag=Value;
  }
  getFlag():boolean{
   return this.Flag;
  }
  setPRODUCT(Value):void{
    this.PRODUCT=Value;
  }
  getPRODUCT():Product{
    console.log("Product is ",this.PRODUCT);
   return this.PRODUCT;
  }
  setPRODUCTARRAY(Value):void{
    this.PRODUCTARRAY=Value;
  }
  getPRODUCTARRAY():Product[]{
    console.log(this.PRODUCTARRAY);
   return this.PRODUCTARRAY;
  }
  
}
