import { Component, OnInit } from '@angular/core';
import { InfoProyectosService } from '../../services/info-proyecto.service';
import { InfoProyecto } from '../../interfaces/proyecto.interface';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  public InfoProyectos: InfoProyecto[];

  // Swiper
  index:number = 0;
  config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    speed: 1000,
    autoplay: true,
    slidesPerView: 1,
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: false,
    centeredSlides: true,
    loop: false,
    roundLengths: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    spaceBetween: 0,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        }
    }
};

  constructor(public InfoProyectosService: InfoProyectosService) { }

  ngOnInit() {
    this.InfoProyectosService.info_proyectos().subscribe( resp => {
      this.InfoProyectos = resp['proyectos'];
      console.log(this.InfoProyectos);
    });
  }





}
