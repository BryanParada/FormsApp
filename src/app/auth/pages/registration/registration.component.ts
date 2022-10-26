import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { cantBeStrider, emailPattern, name_lastnamePattern } from 'src/app/shared/Validations/validations';
import { ValidatorService } from '../../../shared/Validations/validator.service';
import { EmailValidatorService } from '../../../shared/Validations/email-validator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [
  ]
})
export class RegistrationComponent implements OnInit {
 
 
  myFormRegistration: FormGroup = this.fb.group({
    name     : ['', [Validators.required, Validators.pattern( this.vs.name_lastnamePattern)] ],
    email    : ['', [Validators.required, Validators.pattern( this.vs.emailPattern ) ], [this.emailValidator] ],
    username : ['', [Validators.required, this.vs.cantBeStrider] ],
    password : ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required] ],

  },{
    validators: [ this.vs.sameFields('password','password2')]
  })

  constructor( private fb: FormBuilder,
               private vs: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.myFormRegistration.reset({
      name: 'Bryan Parada',
      email: 'test1@test.com',
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
