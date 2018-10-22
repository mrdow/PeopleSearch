import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject, merge } from 'rxjs';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  @Input() people: Person[];
  @Output() onDeleted = new EventEmitter<any>();

  constructor(private personService: PersonService) { }

  ngOnInit() {

  }

  peopleChanged(people) {
    this.people = people;
  }

  delete(person: Person): void {
    this.personService.deletePerson(person).subscribe(this.onDeleted.emit);
  }
}
