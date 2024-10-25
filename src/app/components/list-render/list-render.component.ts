import { Component } from '@angular/core';
import { Person } from '../../Person';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {
  people: Person[] = [];

  constructor(private listService: ListService){
    this.getPerson();
  }

  getPerson():void{
    this.listService.getAll().subscribe((person) => (this.people = person));
  }
}
