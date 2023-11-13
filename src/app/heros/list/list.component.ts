import { Component } from '@angular/core';


interface Hero {
  id: number; 
  name: string;
}


@Component({
  selector: 'heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesNames:Hero[] = [
    {id:1, name: "Iroman"},
    {id:2, name: "Spiderman"},
    {id:3, name: "Hulk"},
    {id:4, name: "Sheulk"},
    {id:5, name: "Thor"},
    {id:6, name: "Cap America"},
    {id:7, name: "Antman"},
  ]
  deletedHero: Hero | undefined;
   

  removeLastElement():void {
    this.deletedHero = this.heroesNames.pop();
  }
}
