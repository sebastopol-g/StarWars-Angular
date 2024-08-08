import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() character;
  @Output() characterSide = new EventEmitter<{name: string, side: string}>();

  assignSide(side){
    this.characterSide.emit({name: this.character.name, side: side});
  }
}
