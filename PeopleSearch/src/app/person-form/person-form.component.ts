import { Component, OnInit } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
import { ImageService } from '../services/image.service';
import { FormValidationService } from '../services/form-validation.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  person: Person = new Person();
  personForm: FormGroup;

  safeUrl: SafeUrl;
  isSaving: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private imageService: ImageService,
    private formValidationService: FormValidationService
  ) { }

  ngOnInit() {
    const id = +(this.route.snapshot.paramMap.get('id')); // + will convert to number
    if (id) {
      this.personService.getPerson(id)
        .subscribe(person => {
          this.person = person;
          this.initializeForm();
          if (this.person.image) {
            this.safeUrl = this.imageService.sanitize(this.person.image);
          }
        });
    } else {
      this.person = new Person();
      this.initializeForm();
    }
  }

  initializeForm(): any {
    this.personForm = this.formBuilder.group({
      id: [this.person.id],
      image: [this.person.image],
      firstName: [this.person.firstName, Validators.compose([Validators.required, Validators.maxLength(50)])],
      lastName: [this.person.lastName, Validators.compose([Validators.required, Validators.maxLength(50)])],
      birthDate: [this.person.birthDate, Validators.required],
      deathDate: [this.person.deathDate]
    });
  }

  processImage(imageInput: HTMLInputElement) {
    const image = imageInput.files[0];

    if (image) {
      this.imageService.processImage(image).subscribe(i => {
        if (this.person.image) {
          i.id = this.person.image.id;
        }
        this.personForm.setControl('image', new FormControl(i));
        this.safeUrl = this.imageService.sanitize(i);
      })
    }
  }

  save(): void {
    if (this.personForm.valid) {
      this.isSaving = true;
      this.personService.updatePerson(this.personForm.value)
        .subscribe(
          () => this.goBack(),
          () => this.isSaving = false
        );
    }
  }

  goBack(): void {
    this.router.navigateByUrl('people');
  }

  get errors() {
    return JSON.stringify(this.formValidationService.getAllErrors(this.personForm));
  }

  get firstName() { return this.personForm.get('firstName'); }
  get lastName() { return this.personForm.get('lastName'); }
  get birthDate() { return this.personForm.get('birthDate'); }
}
