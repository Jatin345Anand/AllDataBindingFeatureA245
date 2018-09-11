import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';
import { Product } from '../product';
@Component({
  selector: 'app-cmc',
  templateUrl: './cmc.component.html',
  styleUrls: ['./cmc.component.css']
})
export class CmcComponent implements OnInit {
  private title:string;
  private price:string;
  private name:number;
  private flag:boolean;
  private ProductName:string;
  private ProductUrl:string;
  private ProductAddress:string;
  private ProductPrice:number;

  private PRODUCTOBJ:Product;
  PRODUCTARRAY:number[];

  constructor(private CS:CustomService) {
     this.title="CustomComponent";

  }
  SetNameAndFlag(FLAG,NAME){
   this.name=NAME;
   this.flag=FLAG;
    console.log(this.name);
   console.log(this.flag);
   console.log(this.price);
   this.CS.setInt(  parseInt( this.price)); 
   this.CS.setString(this.name); 
   this.CS.setFlag(  this.flag);
   console.log(this.CS.getInt());
   console.log(this.CS.getFlag());
   console.log(this.CS.getString());
   
  }
  TakePrice(event):void{
   this.price=event.target.value;
  }
  ADDDATAofPRODUCT(Name,Price,Url,Address):void{
    this.ProductName=Name;
    this.ProductAddress = Address;
    this.ProductPrice = parseInt (Price);
    this.ProductUrl = Url;
   // Product OBJ = new Product();
    this.PRODUCTOBJ = new Product(this.ProductName,this.ProductPrice,this.ProductUrl,this.ProductAddress);
    console.log(`Name = ${this.PRODUCTOBJ.Name} && Price = ${this.PRODUCTOBJ.Price} && Address = ${this.PRODUCTOBJ.Address} && Url = ${this.PRODUCTOBJ.Url}`);
    // this.PRODUCTARRAY.push(new Product(this.ProductName,this.ProductPrice,this.ProductUrl,this.ProductAddress));
    // console.log(this.PRODUCTARRAY[0]); 
    this.CS.setPRODUCT(this.PRODUCTOBJ); 
    console.log(this.CS.getPRODUCT());
   // console.log(this.PRODUCTARRAY.length);
  }
  ngOnInit() {
  }

}
