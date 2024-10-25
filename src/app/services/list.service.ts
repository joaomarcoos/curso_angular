import { Injectable } from '@angular/core';
import { Person } from '../Person';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(people: Person[], person: Person){
    console.log('service activaded!')

    return people.filter((p) => person.name !== p.name);
  }
}
