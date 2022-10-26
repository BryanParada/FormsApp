import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {

  //TODO: TEMPORAL
  name_lastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  // '([a-zA-Z]+) (.+[a-zA-Z]+).+$'; // para 2 apellidos Te obliga a escribir al menos 2 palabras, pero te permite añadir 3 o más.

  cantBeStrider(control: FormControl){
    const value: string = control.value?.trim().toLowerCase();
    // console.log(value);
    
    if (value === 'strider'){
      return {
        noStrider: true
      }
    }
    return null;
    
  }

  myFormRegistration: FormGroup = this.fb.group({
    name    : ['', [Validators.required, Validators.pattern( this.name_lastnamePattern)] ],
    email   : ['', [Validators.required, Validators.pattern( this.emailPattern ) ] ],
    username: ['', [Validators.required, this.cantBeStrider] ]
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myFormRegistration.reset({
      name: 'Bryan Parada',
      email: 'bryan@gmail.com',
      username: 'bparadac'
    })
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
