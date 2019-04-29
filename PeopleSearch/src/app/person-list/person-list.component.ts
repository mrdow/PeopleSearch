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
  @Output() onListChanged = new EventEmitter<any>();

  faSpinner = faSpinner;

  constructor() { }
}
