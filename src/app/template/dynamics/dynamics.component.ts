import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite{
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  person: Person = {
    name: 'Bryan',
    favorites: [
    {id: 1,name: 'Metal Gear'},
    {id: 2,name: 'Death Stranding'},
    ] 
  };

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log('form posteado');
    
  }

  removeItem(index: number){

    this.person.favorites.splice(index, 1);
  }

}
