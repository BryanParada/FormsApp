import { Component} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{

  // myForm: FormGroup = new FormGroup({
  //   'name'  : new FormControl('RTX 4080ti'),
  //   'price' : new FormControl(1500),
  //   'stock' : new FormControl(5)
  // })

  myForm: FormGroup = this.fb.group({
    name : ['RTX 4080ti', [Validators.required, Validators.minLength(3)]   ],  //valor del campo, validador sincrono, validador asincrono
    price: [1500, [Validators.required, Validators.min(0)]],
    stock: [5, [Validators.required, Validators.min(0)]],
  })

  constructor( private fb: FormBuilder) { }
 

}
