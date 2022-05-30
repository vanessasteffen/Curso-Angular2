import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TemplateFormComponent} from "./template-form.component";
import {FormsModule} from "@angular/forms";
import {FormDebugComponent} from "../form-debug/form-debug.component";
import {CampoControleErroComponent} from "../campo-controle-erro/campo-controle-erro.component";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControleErroComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TemplateFormModule { }
