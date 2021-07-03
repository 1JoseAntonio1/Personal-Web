import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoHabilidad } from '../interfaces/habilidad.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoHabilidadesService {

  habilidades: InfoHabilidad[] = [];

  constructor( private http: HttpClient) {
    this.http.get('assets/data/data-skills.json').subscribe( (data: InfoHabilidad[]) => {
      this.habilidades = data['habilidades'];
    });
  }

  info_habilidades() {
    return this.http.get('assets/data/data-skills.json');
  }

  todas_Habilidades(){
    return this.habilidades;
  }

  buscar_Habilidades(grupo: string, termino: string): InfoHabilidad[] {
    let habilides_filtro: InfoHabilidad[] = [];
    termino = termino.toLowerCase();

    for (let habilidad of this.habilidades) {
      let habilidad_nombre: string = habilidad.habilidad.toLowerCase();
      if(habilidad.grupo.indexOf(grupo) >= 0){
        if (habilidad_nombre.indexOf( termino ) >= 0 ) {
          habilides_filtro.push(habilidad);
        }
      }
    }
    return habilides_filtro;
  }
}
