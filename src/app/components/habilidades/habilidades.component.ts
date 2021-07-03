import { Component, OnInit } from '@angular/core';
import { InfoHabilidadesService } from '../../services/info-habilidades.service';
import { InfoHabilidad } from '../../interfaces/habilidad.interface';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  infoHabilidades: InfoHabilidad[] = [];

  // Paginacion
  paginaActual: number = 1;

  constructor(public InfoHabilidadesService: InfoHabilidadesService ) {

  }

  ngOnInit() {
    this.InfoHabilidadesService.info_habilidades().subscribe( resp => {
      this.infoHabilidades = resp['habilidades'];
    });
  }

  buscar_habilidad(grupo: string, termino: string) {
    this.infoHabilidades = this.InfoHabilidadesService.buscar_Habilidades(grupo, termino);
    this.paginaActual = 1;
  }
}
