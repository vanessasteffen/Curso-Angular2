import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.less']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['Angular2'];

  mostrarCursos: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
  onMostarCursos(){
    this.mostrarCursos = !this.mostrarCursos;

  }
}

