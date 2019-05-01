import { Component, Output, Input, EventEmitter } from '@angular/core';
import { faSpinner } from '@fortawesome/fontawesome-free';

import { Person } from '../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
  @Input() people: Person[]
  @Input() isLoading: boolean;
  @Output() listChanged = new EventEmitter<any>();

  faSpinner = faSpinner;

  constructor() { }

  onDeleted(person: Person) {
    const personIndex = this.people.indexOf(person, 0);
    if (personIndex > -1) {
      this.people.splice(personIndex, 1);
    }
    this.listChanged.emit();
  }
}
