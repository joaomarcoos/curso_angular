import { Component } from '@angular/core';
import { Person } from '../../Person';
import { ListService } from '../../services/list.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, RouterModule, FormsModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {
  people: Person[] = [];

  newPerson: Person = {id: 0, name:'', age:0, city:''};

  constructor(private listService: ListService){
    this.getPerson();
  }

  addPerson(){
    this.listService.addPerson(this.newPerson).subscribe((addPerson)=>{

      this.people.push(addPerson);
      this.newPerson = {id: 0, name:'', age:0, city:''};
    });
  }
  removePerson(person: Person){
    this.listService.remove(Number(person.id)).subscribe({
      next: ()=>{
        this.people.filter((p) => person.id !== p.id);
      },
      error: (err)=>{
        console.error('Error removing person:', err);
      }
    });
  }
  getPerson():void{
    this.listService.getAll().subscribe((person) => (this.people = person));
  }
}
