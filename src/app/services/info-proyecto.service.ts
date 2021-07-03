import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoProyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoProyectosService {

  proyectos: InfoProyecto[] = [];

  constructor( private http: HttpClient) {
    this.http.get('assets/data/data-proyectos.json').subscribe( (data: InfoProyecto[]) => {
      this.proyectos = data['proyectos'];
    });
  }

  info_proyectos() {
    return this.http.get('assets/data/data-proyectos.json');
  }

  todas_Habilidades(){
    return this.proyectos;
  }
}
