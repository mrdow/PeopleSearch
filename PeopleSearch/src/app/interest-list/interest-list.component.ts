import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

import { Interest } from '../models/interest';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.scss']
})
export class InterestListComponent {
  @Input() interestForms: FormArray;

  get filteredInterests(): Interest[] {
    return this.interestForms.value.filter(i => !i.isDeleted);
  }

  constructor(private formBuilder: FormBuilder) { }

  delete(interest: Interest): void {
    var currentInterests = this.interestForms.value;
    currentInterests.find(i => i.id === interest.id).isDeleted = true;
    this.interestForms = this.formBuilder.array(currentInterests);
  }
}
