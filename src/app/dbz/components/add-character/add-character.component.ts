import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

    character: Character = {
     id: '',name: '', power: 0
    }

    @Output('onNew')
    newCharacter: EventEmitter<Character> = new EventEmitter();

    emitCharacter(): void {
      if(this.character.name.length < 2) return;
      this.newCharacter.emit(this.character);
      this.character={id:'',name: '', power: 0}
    }

}
