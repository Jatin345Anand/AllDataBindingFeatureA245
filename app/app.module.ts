import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child11Component } from './child1/child11/child11.component';
import { Child12Component } from './child1/child12/child12.component';
import { Child2Component } from './child2/child2.component';
import { Child21Component } from './child2/child21/child21.component';
import { Child22Component } from './child2/child22/child22.component';
import { CustomUrlPipe } from './custom-url.pipe';

import { CustomService } from './custom.service';
import { CustomModuleModule} from './custom-module/custom-module.module';
// import { Mchild1Component } from './custom-module/mchild1/mchild1.component';
// import { Mchild2Component } from './custom-module/mchild2/mchild2.component';
import { CmcComponent } from './cmc/cmc.component';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child11Component,
    Child12Component,
    Child2Component,
    Child21Component,
    Child22Component,
    CustomUrlPipe,
    CmcComponent
  ],
  imports: [
    BrowserModule,CustomModuleModule
  ],
  providers: [CustomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
