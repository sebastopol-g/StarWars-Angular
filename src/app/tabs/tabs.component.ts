import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];

  chosenList = 'all';


  getCharacters(){
    if(this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    })
  }

  onChoose(side){
    this.chosenList = side;
  }

  onSideAssigned(charInfo){
    const pos = this.characters.findIndex((char) => { return char.name === charInfo.name })
    this.characters[pos].side = charInfo.side;
  }
}
