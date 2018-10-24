import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../person.service';
import { Person } from '../person';
import { ImageService } from '../image.service';
import { PersonFormComponent } from '../person-form/person-form.component';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  @ViewChild(PersonFormComponent) personForm: PersonFormComponent;

  person: Person = new Person();
  imageUrl: string;

  isNew: boolean;

  isSaving: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private imageService: ImageService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.getPerson(id)
        .subscribe(person => {
          this.person = person;
          if (this.person.imageId) {
            this.imageUrl = this.imageService.getImageUrl(this.person.imageId)
          }
        });
    }
    else {
      this.isNew = true;
    }
  }

  save(): void {
    this.isSaving = true;
    if (this.personForm.image) {
      this.imageService.updateImage(this.personForm.image, this.person.imageId)
        .subscribe((imageId) => {
          this.person.imageId = imageId;
          this.personService.updatePerson(this.person)
            .subscribe(
              () => this.goBack(),
              () => this.isSaving = false
            );
        });
    }
    else {
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
