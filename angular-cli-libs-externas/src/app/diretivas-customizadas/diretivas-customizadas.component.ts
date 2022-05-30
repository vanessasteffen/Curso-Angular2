import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.less']
})
export class DiretivasCustomizadasComponent implements OnInit {
  mostrarCursos: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  onMostarCursos(){
    this.mostrarCursos = !this.mostrarCursos;

  }

}
