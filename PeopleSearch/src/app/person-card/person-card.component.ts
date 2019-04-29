import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
  @Output() onDeleted = new EventEmitter<Person>();

  stateCodes = StateCodes;

  safeUrl: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private personService: PersonService,
    private imageService: ImageService
  ) { }

  ngOnInit() {
    if (this.person.image) {
      this.safeUrl = this.imageService.sanitize(this.person.image);
    }
  }

  getAge() {
    var endDate = this.person.deathDate ? Date.parse(this.person.deathDate) : Date.now();
    var startDate = Date.parse(this.person.birthDate);
    var ageDifMs = endDate - startDate;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  stateCodeKeys(): string[] {
    return Object.keys(StateCodes);
  }

  delete(): void {
    this.personService.deletePerson(this.person).subscribe();
    this.onDeleted.emit(this.person);
  }
}
