import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Person} from '../../Person';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  people: Person[] = [
    {
      name: 'João',
      age: 23
    },
    {
      name: 'Maria',
      age: 28
    }
  ]

  personDetail: string = '';

  showDetail(person: Person): void{
    this.personDetail = `O nome é: ${person.name} e a idade é: ${person.age}`
  }
}
