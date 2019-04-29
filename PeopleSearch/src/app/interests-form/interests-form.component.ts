import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Interest } from '../models/interest';

@Component({
  selector: 'app-interests-form',
  templateUrl: './interests-form.component.html',
  styleUrls: ['./interests-form.component.scss']
})
export class InterestsFormComponent implements OnInit {
  @Input() nestableForm: FormGroup;
  @Input() interests: Interest[];

  interestForms: FormArray;
  interestForm: FormGroup;

  interest = new Interest();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): any {
    this.clearForm();

    this.interestForms = this.formBuilder.array(this.interests.map(i => this.interestToFormGroup(i)));

    if (this.nestableForm) {
      this.nestableForm.addControl('interests', this.interestForms);
    }
  }

  clearForm() {
    this.interestForm = this.interestToFormGroup(new Interest());
  }

  interestToFormGroup(interest: Interest): FormGroup {
    return this.formBuilder.group({
      id: [interest.id],
      name: [interest.name, Validators.compose([Validators.required, Validators.maxLength(200)])],
      isDeleted: [interest.isDeleted]
    })
  }

  add() {
    if (this.interestForm.valid) {
      this.interestForms.push(this.interestForm);
      this.clearForm();
    }
  }

  get name() { return this.interestForm.get('name'); }
}
