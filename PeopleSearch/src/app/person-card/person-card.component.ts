import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { StateCodes } from '../models/address';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person;

  srcData: SafeResourceUrl;
  safeUrl: SafeUrl;

  stateCodes = StateCodes;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    if (this.person.image) {
      let unsafeUrl = `data:${this.person.image.contentType};base64,${this.person.image.file}`
      this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
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
}
