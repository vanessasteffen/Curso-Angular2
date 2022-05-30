import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import {NgForm} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {TemplateFormModule} from "./template-form/template-form.module";
import { FormDebugComponent } from './form-debug/form-debug.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TemplateFormModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
