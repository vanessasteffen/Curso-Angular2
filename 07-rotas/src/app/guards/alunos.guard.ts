import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AlunosGuard implements CanActivateChild {

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    Observable<boolean> | Promise<boolean> | boolean {

    if (state.url.includes('editar')) {
      alert('Usuário sem acesso');
      return false;
    }

    return true;
  }
}
