import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
//import { CursosComponent } from './cursos/cursos.component';
import {routing} from "./app.routing";
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import {CursosService} from "./cursos/cursos.service";
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import {CursosModule} from "./cursos/cursos.module";
import {AlunosModule} from "./alunos/alunos.module";
import {AuthService} from "./login/auth.service";
import {AuthGuard} from "./guards/auth.guard.service";
import {CursosGuard} from "./guards/cursos.guard";
import {AlunosGuard} from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

//import { AlunosComponent } from './alunos/alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
    //AlunosComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AppRoutingModule,
    AlunosModule,
    routing,
    FormsModule
  ],
  providers: [
    CursosService,
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
