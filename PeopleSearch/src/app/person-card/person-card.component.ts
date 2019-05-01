import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { PersonService } from '../services/person.service';
import { StateCodes } from '../models/address';
import { Person } from '../models/person';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person;
  @Output() deleted = new EventEmitter<Person>();

  stateCodes = StateCodes;

  safeUrl: SafeUrl;

  constructor(
    private personService: PersonService,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    if (this.person.image) {
      this.safeUrl = this.imageService.sanitize(this.person.image);
    }
  }

  stateCodeKeys(): string[] {
    return Object.keys(StateCodes);
  }

  delete(): void {
    this.personService.deletePerson(this.person).subscribe();
    this.deleted.emit(this.person);
  }
}
