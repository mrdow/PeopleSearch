import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  @Input() person: Person;
  @Output() onComplete = new EventEmitter<Person>();

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  add(firstName: string, lastName: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim();

    if (!firstName && !lastName) {
      return;
    }

    this.personService.addPerson({ firstName, lastName } as Person)
      .subscribe(this.onChange);
  }

  save(): void {
    this.personService.updatePerson(this.person)
      .subscribe(this.onChange);
  }

  onChange(): void {
    this.onComplete.emit();
  }
}
