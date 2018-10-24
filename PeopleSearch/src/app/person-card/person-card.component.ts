import { Component, OnInit, Input } from '@angular/core';

import { ImageService } from '../image.service';
import { StateCodes } from '../address';
import { Person } from '../person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person;

  imageUrl: string;

  stateCodes = StateCodes;

  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.imageUrl = this.imageService.getImageUrl(this.person.imageId);
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
