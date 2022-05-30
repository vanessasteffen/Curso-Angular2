import {Component, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.less']
})
export class CursosComponent implements OnInit {

  cursos: any;
  pagina: any;
  inscricao: any;

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy() {
    inscricao: Subscription;
    this.inscricao.unsubscribe();
  }

  proxinaPagina() {
    //this.pagina++;
    this.router.navigate(['/cursos'],
      {queryParams: {'pagina': ++this.pagina}});
  }
}
