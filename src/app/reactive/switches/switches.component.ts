import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  myFormSwitches: FormGroup = this.fb.group({
      gender        : ['M', Validators.required],
      notifications : [true, Validators.required],
      terms         : [false, Validators.requiredTrue]
  });

  person = {
    gender: 'F',
    notifications: true,
  }

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    //establecer la info "person" al objeto "myFormSwitches"
    this.myFormSwitches.reset( {
      ...this.person,
      terms: false
      }
       );

    //Si queremos que las propiedades en Person esten sincronizados es necesario suscribirnos 
    //a los cambios del formulario 
    ///------OPCION 1
    // this.myFormSwitches.valueChanges.subscribe( form => {
    //   // console.log(form);
    //   delete form.terms
    //   this.person = form;
      
    // }); 

    ///------OPCION 2
    this.myFormSwitches.valueChanges.subscribe( ({terms, ...restOfArguments}) => {
      // console.log(form); 
      this.person = restOfArguments;
      
    });

    //Suscribirse a algun campo en particular
    // this.myFormSwitches.get('terms')?.valueChanges.subscribe( newValue => {
    //   console.log(newValue);
      
    // });

 
  }

  save(){
    const formValue = {...this.myFormSwitches.value};
    delete formValue.terms
    // console.log(formValue);
    
    this.person = formValue;
  
  }
  
}
