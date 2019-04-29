import { Component } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  people: Person[];
  isLoading: boolean;

  constructor() { }

  onSearchBegin() {
    this.isLoading = true;
  }

  onSearchComplete(people: Person[]) {
    this.people = people;
    this.isLoading = false;
  }
}
