import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class CursosGuard implements CanActivateChild{

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    Observable<boolean> | Promise<boolean> | boolean {
    console.log('guarda de rotas filhas')
    return true;
  }
}
