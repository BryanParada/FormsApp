import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent  {

  //myform    form builder
  myFormDynamics: FormGroup = this.fb.group({
    name     : ['', [Validators.required, Validators.minLength(3)]   ], //valor del campo, validador sincrono, validador asincrono
    favorites: this.fb.array( [
      ['Metal Gear',Validators.required],
      ['Death Stranding',Validators.required],
    ], Validators.required )
 
  })

  newFavorite: FormControl = this.fb.control('', Validators.required);

  get favoritesArr(){
    return this.myFormDynamics.get('favorites') as FormArray;
  }

  constructor( private fb: FormBuilder) { }

  InvalidField(field: string){
    return this.myFormDynamics.controls[field].errors && this.myFormDynamics.controls[field].touched
  }

  addFavorite(){
    if (this.newFavorite.invalid) {return;}

    this.favoritesArr.push( new FormControl( this.newFavorite.value, Validators.required ));
    //this.favoritesArr.push( this.fb.control( this.newFavorite.value, Validators.required ));
    
    //resetear campo
    this.newFavorite.reset();

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
