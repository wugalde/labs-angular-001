import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class DbzMainComponent  {

    constructor(private dbzService: DbzService){}

    get characters():Character[] {
        return this.dbzService.all();
    }

    onDeleteCharacter(id: string){
        this.dbzService.onDeleteCharacterById(id);
    }


    addNewCharacter(charac: Character){
        this.dbzService.addNewCharacter(charac);
    }
}