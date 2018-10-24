import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../person.service';
import { Person } from '../person';
import { PersonFormComponent } from '../person-form/person-form.component';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @ViewChild(PersonFormComponent) personForm: PersonFormComponent;
  @ViewChild(AddressFormComponent) addressForm: AddressFormComponent;

  person: Person = new Person();
  imageUrl: string;

  isNew: boolean;
  isValid: boolean = true;
  isSaving: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPerson();
  }

  onValidationChanged(isValid: boolean): any {
    this.isValid = isValid;
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.getPerson(id)
        .subscribe(person => {
          this.person = person;
        });
    }
    else {
      this.isNew = true;
    }
  }

  save(): void {
    if (this.isValid) {
      this.isSaving = true;
      this.personService.updatePerson(this.person)
        .subscribe(
          () => this.goBack(),
          () => this.isSaving = false
        );
    }
  }

  goBack(): void {
    this.location.back();
  }
}
