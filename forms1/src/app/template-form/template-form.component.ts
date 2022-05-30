import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }
  e: any;
  event: any;

  onSubmit(form: any) {
    console.log(form);
    //console.log(this.usuario);

  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  verificaValidTouched(campo:any){
    return !campo.valid && campo.touched
  }

  aplicaCssError(campo:any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': !campo.valid && campo.touched
    }
  }
  consultaCEP(cep:any){
    //console.log(cep)
    cep = cep.replace(/\D/g, '');

      var validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)){
      this.http.get(`https://viacep.com.br/ws/${cep}/json`);
    }
  }
}
