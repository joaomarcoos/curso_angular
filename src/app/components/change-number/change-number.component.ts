import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.scss'
})
export class ChangeNumberComponent {

  @Output() changeNumer: EventEmitter<any> = new EventEmitter()
  handleClick(){
    console.log('Clicou')

    this.changeNumer.emit();
  }
}
