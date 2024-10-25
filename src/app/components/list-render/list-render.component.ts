import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Person} from '../../Person';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  constructor(private listService: ListService){

  }

  people: Person[] = [
    {
      name: 'João',
      age: 23
    },
    {
      name: 'Maria',
      age: 28
    },
    {
      name: 'Carlos',
      age: 25
    }
  ]

  personDetail: string = '';

  showDetail(person: Person): void{
    this.personDetail = `O nome é: ${person.name} e a idade é: ${person.age}`
  }

  removePerson(person: Person){
    console.log('removendo');

    this.people = this.listService.remove(this.people, person);
  }
}
