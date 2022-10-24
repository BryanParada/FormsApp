import { Component, OnInit , Input, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myform') myFormTemplate!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.myFormTemplate);
    
  }
  // save(myform: NgForm){
  //   console.log(myform );
  //   console.log(myform.value);
  // }

  nameValid(): boolean{
    // Debido a que no se ha terminado de inizializar la propiedad myFormTemplate, se colocará el signo ? 
    // para preguntar "si es que existe"
    return this.myFormTemplate?.controls['product']?.invalid && this.myFormTemplate?.controls['product']?.touched;
  }


}
