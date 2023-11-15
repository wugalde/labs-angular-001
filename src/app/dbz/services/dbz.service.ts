import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
    
    public characters: Character[] = [
        {id:uuid() ,name: 'Krilling', power: 100},
        {id:uuid() ,name: 'Goku', power: 9000},
        {id:uuid() ,name: 'Vegeta', power: 700}
       ];
    
    
    constructor() { }
    
   all(){
    return  this. characters;  
   }  

   addNewCharacter(character: Character) {
    const temp: Character = {...character, id: uuid()};
    this.characters.push(temp) 
   }

   onDeleteCharacterById(id: string): void {
      this.characters = this.characters.filter( e => e.id !== id);
   }
}