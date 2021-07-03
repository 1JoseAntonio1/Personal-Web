import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    this.alerta('warning', '', 'Actualmente la pagina esta en desarrollo (si ves que falta contenido o algo va mal, estoy trabajando en ello)', 'Ultima Actualizacion: 24/07/2020');
    this.boton_arriba();
  }

  boton_arriba(){
    window.onscroll = function() {
      if(document.documentElement.scrollTop > 1){
        document.querySelector('.go_top').classList.remove('no_show');
        document.querySelector('.go_top').classList.add('show');
      }else{
        document.querySelector('.go_top').classList.remove('show');
        document.querySelector('.go_top').classList.add('no_show');
      }
    }
  }

  go_top(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  desplegarMenu(){
    const menu_dsl = document.getElementById('nav_mov');
    const menu_cnt = document.getElementById('menu');
    menu_dsl.classList.toggle("close");
    menu_cnt.classList.toggle("show_menu");
  }

  alerta(icono, titulo, texto, foot) {
    Swal.fire({
      icon: icono,
      title: titulo,
      text: texto,
      footer: foot
    });
  }

  // scrollToElement(elemento): void {
  //   document.getElementById(elemento).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }
}
