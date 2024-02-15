import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  public alumnos?: any[]

  ngOnInit(): void {
    this.alumnos = alumnos;
  }

}
