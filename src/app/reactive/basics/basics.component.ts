import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit{

  // myForm: FormGroup = new FormGroup({
  //   'name'  : new FormControl('RTX 4080ti'),
  //   'price' : new FormControl(1500),
  //   'stock' : new FormControl(5)
  // })

  myForm: FormGroup = this.fb.group({
    name : [, [Validators.required, Validators.minLength(3)]   ],  //valor del campo, validador sincrono, validador asincrono
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  })

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    //setValue   |   para asignar valores a TODAS las propiedades de FormGroup
    //           v
    this.myForm.reset({
      name: 'RTX 3080',
      price: 1600
      // ,stock: 17 //al usar reset podemos asignar valores SÓLO a algunas propiedades
    })
  }
 
  InvalidField(field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  save(){

    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
