import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from "@angular/router";
import {AlunoFormComponent} from "../alunos/aluno-form/aluno-form.component";
import {Observable} from "rxjs";
import {IformCanDeactivate} from "./iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformCanDeactivate> {

  canDeactivate(
    component: IformCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('guarda de desativação');

    //return component.podeMudarRota();
    return component.podeDesativar();

  }
}
