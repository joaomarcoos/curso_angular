import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent {
  show: boolean = true;

  showMessage():void {
    // alert('Mensagem exibida!');

    this.show = !this.show; // Alterna o estado do show

  }
}
