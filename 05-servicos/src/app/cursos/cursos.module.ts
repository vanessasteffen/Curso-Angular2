import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import {CursosService} from "../cursos/cursos.service";
import { CursosComponent } from './cursos.component';
providers: [CursosService];
@NgModule({
  declarations: [

    CursosComponent
  ],
  imports: [
    CommonModule,

  ],
  exports:[CursosComponent],
  //providers: [CursosService],
})
export class CursosModule { }
