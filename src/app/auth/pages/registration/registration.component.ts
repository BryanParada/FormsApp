import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  //TODO: TEMPORAL
  name_lastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  // '([a-zA-Z]+) (.+[a-zA-Z]+).+$'; // para 2 apellidos Te obliga a escribir al menos 2 palabras, pero te permite añadir 3 o más.

  myFormRegistration: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern( this.name_lastnamePattern)] ]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  invalidField(field: string){
    return this.myFormRegistration.get(field)?.invalid
          && this.myFormRegistration.get(field)?.touched
  }

  submitForm(){
    console.log(this.myFormRegistration.value);
    this.myFormRegistration.markAllAsTouched;
    
  }

}
