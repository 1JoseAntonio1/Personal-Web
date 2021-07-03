import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {

  // Formulario Reactivo
  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.crearFormulario();
  }

  ngOnInit() {
  }

  crearFormulario() {
    return new FormGroup({
      nombre_form: new FormControl( '', [
        Validators.required,
      ]),
      email_form: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]),
      texto_form: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onResetForm() {
    this.contactForm.reset();
  }

  guardar() {
    if (this.contactForm.valid) {
      this.onResetForm();
    } else {
      return Object.values ( this.contactForm.controls ).forEach( control => {
        control.markAsTouched();
      });
    }
  }


  // Validaciones de los campos
  get nombreNoValido(){
    return this.contactForm.get('nombre_form').invalid && this.contactForm.get('nombre_form').touched;
  }

  get emailNoValido(){
    return this.contactForm.get('email_form').invalid && this.contactForm.get('email_form').touched;
  }

  get textoNoValido(){
    return this.contactForm.get('texto_form').invalid && this.contactForm.get('texto_form').touched;
  }
}
