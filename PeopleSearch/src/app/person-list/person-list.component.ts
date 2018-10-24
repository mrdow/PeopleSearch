import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSpinner } from '@fortawesome/fontawesome-free';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  @Output() onDelete = new EventEmitter<any>();

  faSpinner = faSpinner;
  loading: boolean;

  private _people: Person[];
  set people(value: Person[]) {
    this._people = value;
    this.loading = false;
  }

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }
  
  delete(person: Person): void {
    this.personService.deletePerson(person).subscribe();
    this.onDelete.emit();
  }
}
