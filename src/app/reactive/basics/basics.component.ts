import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent{

  myForm: FormGroup = new FormGroup({
    'name': new FormControl('RTX 4080ti')
  })

  constructor() { }
 

}
