import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ncstyle',
  templateUrl: './diretiva-ncstyle.component.html',
  styleUrls: ['./diretiva-ncstyle.component.less']
})
export class DiretivaNcstyleComponent implements OnInit {
  ativo: boolean = false;
  tamanhoFonte: number = 100;
  constructor() { }

  ngOnInit(): void {
  }
  mudarAtivo(){
    this.ativo = !this.ativo
  }

}
