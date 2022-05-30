import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AlunosService} from "../alunos.service";
import {Subscription} from "rxjs";
import {IformCanDeactivate} from "../../guards/iform-candeactivate";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.less']
})
export class AlunoFormComponent implements OnInit, IformCanDeactivate {

  inscricao: any;
  aluno: any = {};
  id: any;
  private formMudou: boolean = false;

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

        if (this.aluno === null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }
  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair desta página?');
    }
    return true;
  }
  podeDesativar() {
    return this.podeMudarRota();
  }

}
