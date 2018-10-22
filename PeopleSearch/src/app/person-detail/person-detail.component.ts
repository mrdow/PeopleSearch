import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @Input() person: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id)
      .subscribe(person => this.person = person);
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

  goBack(): void {
    this.location.back();
  }

  onChange(): void {
    this.goBack();
  }
}
