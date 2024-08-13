import { Component, Input, Output, EventEmitter} from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() character;
  @Output() characterSide = new EventEmitter<{name: string, side: string}>();
  swService: StarWarsService
  
  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onAssign(side){
    this.swService.onSideAssigned({ name: this.character.name, side: side });
  }
}
