import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit {
  
  public cursos?: any[];

  ngOnInit(): void {
    this.cursos = cursos;
  }
}
