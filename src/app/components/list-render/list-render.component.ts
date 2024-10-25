import { Component } from '@angular/core';
import { Person } from '../../Person';
import { ListService } from '../../services/list.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, RouterModule],
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
