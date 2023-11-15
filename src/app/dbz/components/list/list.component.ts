import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input('characters')
  public caracterList: Character[] = []

  @Output('delCharacter')
  deleteCharacter: EventEmitter<string> = new EventEmitter();

  emitOnDelete(id: string):void {
    if(!id) return
    this.deleteCharacter.emit(id);
  }
}
