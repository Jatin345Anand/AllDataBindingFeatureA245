import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';
import { CustomService } from '../../custom.service';
import { Product } from '../../product'; 
@Component({
  selector: 'app-child22',
  templateUrl: './child22.component.html',
  styleUrls: ['./child22.component.css']
})
export class Child22Component implements OnInit {
  @Output() 
  PC22Output:EventEmitter<string> = new EventEmitter<string>();
  @Input('dynamicTitleC22')
  dynamicTitleC22:string;

  ProductObj:Product;
  ProductArray:Product[];
  constructor(private CS:CustomService) {

  }
  CallAppParent(){
    this.PC22Output.emit("This is Childe22 .....");
  }
  CallService(){
    this.ProductObj=this.CS.getPRODUCT();
    console.log(this.ProductObj);

    console.log("Length = ",this.CS.getPRODUCTARRAY().length);
    this.CS.getPRODUCTARRAY().push(this.ProductObj);
    this.ProductArray = this.CS.getPRODUCTARRAY();
    console.log(this.ProductArray);
  }
  ngOnInit() {
  }

}
