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

  constructor(private formBuilder: FormBuilder) { }

  get filteredInterests(): Interest[] {
    return this.interestForms && this.interestForms.value ? this.interestForms.value.filter(i => !i.isDeleted) : [];
  }

  delete(interest: Interest): void {
    var currentInterests = this.interestForms ? this.interestForms.value : [];
    const interestToDelete = currentInterests.find(i => i.id === interest.id);
    if (interestToDelete) {
      interestToDelete.isDeleted = true;
    }
    this.interestForms = this.formBuilder.array(currentInterests);
  }
}
