import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent  {

  //myform    form builder
  myFormDynamics: FormGroup = this.fb.group({
    name : ['', [Validators.required, Validators.minLength(3)]   ] //valor del campo, validador sincrono, validador asincrono
 
  })

  constructor( private fb: FormBuilder) { }

  InvalidField(field: string){
    return this.myFormDynamics.controls[field].errors && this.myFormDynamics.controls[field].touched
  }

  save(){
    //imprimir valor form solo si es valido
    if (this.myFormDynamics.invalid){ 
      this.myFormDynamics.markAllAsTouched();
      return;
    }

    console.log(this.myFormDynamics.value);
    

  }




}
