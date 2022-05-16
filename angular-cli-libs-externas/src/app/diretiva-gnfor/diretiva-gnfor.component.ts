import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-gnfor',
  templateUrl: './diretiva-gnfor.component.html',
  styleUrls: ['./diretiva-gnfor.component.less']
})
export class DiretivaGnforComponent implements OnInit {

  cursos: string[] = ["Angular 2 ", "Java", "Ruby"];
  constructor() { }

  ngOnInit(): void {
    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }

}
