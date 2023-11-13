import { Component } from '@angular/core';

@Component({
  selector: 'heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public edad: number = 45;

  public isChangeName = false;
  public isChangeEdad = false;

  get capName(): string {
    return this.name.toUpperCase();
  }

  getHeroDesc(){
    return `${this.name} ==> Edad: ${this.edad} `;
  }

  cambiarNombre() {
    this.name = 'Walter Ugalde'
    this.isChangeName = true;
  }

  cambiarEdad() {
    this.edad=50;
    this.isChangeEdad = true;
  }

  reset() {
    this.isChangeEdad = false;
    this.isChangeName = false;

    this.name = '';
    this.edad = 0;
  }
}
