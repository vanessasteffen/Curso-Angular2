import {Injectable, EventEmitter} from "@angular/core";
import {LogService} from "../shared/log.service";

//usando o decoretor injectable
@Injectable()

export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: any = ['Angular 2', 'Java', 'Ruby'];

  constructor(private logService: LogService) {
    console.log(CursosService);

  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos')
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo Curso ${curso}` );
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
