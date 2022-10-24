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

  newGame: string = '';

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
  console.log('Removed');

    this.person.favorites.splice(index, 1);
  }

  addGame(){
    console.log('Added');
    
    const newFavorite: Favorite = { 
      id  : this.person.favorites.length + 1,
      name: this.newGame
    }

    this.person.favorites.push({...newFavorite});
    this.newGame = '';

  }


}
