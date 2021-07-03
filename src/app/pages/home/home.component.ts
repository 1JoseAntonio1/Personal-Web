import { Component, OnInit } from '@angular/core';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  constructor() { }

  ngOnInit() {
    //Las animaciones sean adeacuadas en funcion de la altura de la pantalla
    this.efecto_pantalla();

  }

  efecto_pantalla(){
    const alto_pagina = window.innerHeight;
    const ancho_pagina = window.innerWidth;
    let start_efecto, end_efecto;

    if(alto_pagina >= 700 && ancho_pagina >= 725){
      start_efecto = 'top 80%';
      end_efecto = 'top 2.5%';
    }else{
      start_efecto = 'top 95%';
      end_efecto = 'top 2.5%';
    }
    this.efecto_titulo(start_efecto, end_efecto);
    this.efecto_Entrada_izq(start_efecto, end_efecto);
    this.efecto_Entrada_drh(start_efecto, end_efecto);
    this.efecto_Entrada_arb(start_efecto, end_efecto);
    this.efecto_Entrada_abj(start_efecto, end_efecto);
    this.efecto_Entrada_opacidad(start_efecto, end_efecto);
  }

  efecto_titulo(start_efecto: string, end_efecto: string){
    const reveal = gsap.utils.toArray('.efecto_scroll_titulo');
    reveal.forEach((text, i) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active_titu',
        start: start_efecto,
        end: end_efecto,
        // markers: true
      })
    })
  }

  efecto_Entrada_izq(start_efecto: string, end_efecto: string){
    const reveal = gsap.utils.toArray('.efecto_scroll_entrada_izq');
    reveal.forEach((text, i) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active_ent',
        start: start_efecto,
        end: end_efecto,
        // markers: true
      })
    })
  }

  efecto_Entrada_drh(start_efecto: string, end_efecto: string){
    const reveal = gsap.utils.toArray('.efecto_scroll_entrada_drh');
    reveal.forEach((text, i) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active_ent',
        start: start_efecto,
        end: end_efecto,
        // markers: true
      })
    })
  }

  efecto_Entrada_arb(start_efecto: string, end_efecto: string){
    const reveal = gsap.utils.toArray('.efecto_scroll_entrada_arb');
    reveal.forEach((text, i) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active_ent',
        start: start_efecto,
        end: end_efecto,
        // markers: true
      })
    })
  }

  efecto_Entrada_abj(start_efecto: string, end_efecto: string){
    const reveal = gsap.utils.toArray('.efecto_scroll_entrada_abj');
    reveal.forEach((text, i) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active_ent',
        start: start_efecto,
        end: end_efecto,
        // markers: true
      })
    })
  }

  efecto_Entrada_opacidad(start_efecto: string, end_efecto: string){
    const reveal = gsap.utils.toArray('.efecto_scroll_entrada_opacidad');
    reveal.forEach((text, i) => {
      ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active_ent',
        start: start_efecto,
        end: end_efecto,
        // markers: true
      })
    })
  }
}
