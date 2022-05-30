import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
//import {CursosComponent} from "./cursos/cursos.component";
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from "./guards/auth.guard.service";
import {CursosGuard} from "./guards/cursos.guard";
import {AlunosGuard} from "./guards/alunos.guard";
import {PaginaNaoEncontradaComponent} from "./pagina-nao-encontrada/pagina-nao-encontrada.component";
//import {CursoDetalheComponent} from "./cursos/curso-detalhe/curso-detalhe.component";
//import {CursoNaoEncontradoComponent} from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoutes: Routes = [
  //{path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', canActivate: [AuthGuard], canLoad: [AuthGuard]},
 // {path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule', canActivate: [AuthGuard],  canLoad: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard], canActivateChild:[AlunosGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
