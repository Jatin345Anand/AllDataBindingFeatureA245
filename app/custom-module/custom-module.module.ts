import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mchild1Component } from './mchild1/mchild1.component';
import { Mchild2Component } from './mchild2/mchild2.component';
import { CustomModuleComponent } from './custom-module.component';

// import { CmcComponent } from '../cmc/cmc.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Mchild1Component, Mchild2Component, CustomModuleComponent
    // CmcComponent
  ]
})
export class CustomModuleModule { }
