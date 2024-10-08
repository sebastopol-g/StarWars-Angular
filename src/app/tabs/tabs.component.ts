import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  characters = [];
  chosenList = 'all';
  swService: StarWarsService
  
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onChoose(side){
    this.chosenList = side;
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }
}
