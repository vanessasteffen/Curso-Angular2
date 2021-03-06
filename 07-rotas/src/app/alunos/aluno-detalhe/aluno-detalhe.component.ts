import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CursosService} from "../../cursos/cursos.service";
import {AlunosService} from "../alunos.service";
import {Subscription} from "rxjs";
import {Aluno} from "../aluno";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.less']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {


  inscricao: any;
  aluno: any;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router) {
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
   inscricao: Subscription;
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
        }
    );

    /*this.inscricao = this.route.data.subscribe(
      (info) => {
        console.log(info);
        //this.aluno = info.aluno;
      }
    )*/
  }
  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
