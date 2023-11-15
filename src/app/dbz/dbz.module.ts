import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzMainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzMainComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [DbzMainComponent]
})
export class DbzModule { }
