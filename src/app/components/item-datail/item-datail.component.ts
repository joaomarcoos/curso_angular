import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../Person';
import { ListService } from '../../services/list.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-item-datail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item-datail.component.html',
  styleUrl: './item-datail.component.scss'
})
export class ItemDatailComponent {
  person?: Person;

  constructor(private route: ActivatedRoute, private listService: ListService) {
    this.getPerson()
  }

  getPerson(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.listService.getPerson(id).subscribe((person) => (this.person = person));
  }
}
