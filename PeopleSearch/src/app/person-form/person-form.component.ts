import { Component, OnInit, AfterViewChecked, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
import { Image } from '../models/image';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit, AfterViewChecked {
  @ViewChild('personForm') public form: NgForm;
  @ViewChild('addressForm') public addressForm: AddressFormComponent;

  isValid: boolean;
  person: Person
  safeUrl: SafeUrl;
  image: File;
  isNew: boolean;
  isSaving: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPerson()
    this.sanitize();
  }

  ngAfterViewChecked() {
    this.isValid = this.form.valid && this.addressForm.isValid;
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.getPerson(id)
        .subscribe(person => {
          this.person = person;
          this.sanitize();
        });
    }
    else {
      this.isNew = true;
    }
  }

  processImage(imageInput: any) {
    this.image = imageInput.files[0];

    var fr = new FileReader();
    fr.onload = () => {
      if (!this.person.image) {
        this.person.image = new Image();
      }
      let dataUrl = fr.result.toString();
      let base64String = dataUrl.substr(dataUrl.indexOf(",") + 1);
      this.person.image.file = base64String;
      this.person.image.contentType = this.image.type;
      this.person.image.name = this.image.name;
      this.sanitize();
    }
    fr.readAsDataURL(this.image);
  }

  sanitize() {
    if (this.person.image.file) {
      let unsafeUrl = `data:${this.person.image.contentType};base64,${this.person.image.file}`
      this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
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
