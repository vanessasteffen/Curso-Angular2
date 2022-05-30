import {Component, OnInit} from '@angular/core';
import {initMonth} from "ngx-bootstrap/chronos/units/month";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { map } from 'rxjs/operators'
import {pipe} from "rxjs";
import {EventTarget} from "ngx-bootstrap/utils/facade/browser";
import {types} from "@angular/compiler-cli/linker/babel/src/babel_core";
import {anySymbolName} from "@angular/core/schematics/migrations/typed-forms/util";


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})

export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };


  private cepService: any;


  onSubmit(form: any) {
    console.log(form.value);
    //console.log(this.usuario);
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

}
