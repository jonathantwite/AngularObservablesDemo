import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Input1Component } from './input1/input1.component';
import { Input2Component } from './input2/input2.component';
import { Output1Component } from './output1/output1.component';
import { Output2Component } from './output2/output2.component';
import { Input3Component } from './input3/input3.component';
import { Output3Component } from './output3/output3.component';
import { FormsModule } from '@angular/forms';
import { Input4Component } from './input4/input4.component';
import { Output4Component } from './output4/output4.component';
import { Input5Component } from './input5/input5.component';
import { Output5Component } from './output5/output5.component';

@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    Input2Component,
    Output1Component,
    Output2Component,
    Input3Component,
    Output3Component,
    Input4Component,
    Output4Component,
    Input5Component,
    Output5Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
