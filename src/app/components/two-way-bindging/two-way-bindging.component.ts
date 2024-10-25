import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-bindging',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-bindging.component.html',
  styleUrl: './two-way-bindging.component.scss'
})
export class TwoWayBindgingComponent {
  name: string = '';
}
