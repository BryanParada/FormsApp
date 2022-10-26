import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider, emailPattern, name_lastnamePattern } from 'src/app/shared/Validations/validations';
import { ValidatorService } from '../../../shared/Validations/validator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {
 
 
  myFormRegistration: FormGroup = this.fb.group({
    name    : ['', [Validators.required, Validators.pattern( name_lastnamePattern)] ],
    email   : ['', [Validators.required, Validators.pattern( emailPattern ) ] ],
    username: ['', [Validators.required, cantBeStrider] ]
  })

  constructor( private fb: FormBuilder ) { }

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
