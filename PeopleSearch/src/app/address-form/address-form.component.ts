import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Address, StateCodes } from '../models/address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() nestableForm: FormGroup;
  @Input() address: Address;

  addressForm: FormGroup;

  stateCodes = StateCodes;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (!this.address) {
      this.address = new Address();
    }
    this.initializeForm();
  }

  get address1() { return this.addressForm.get('address1'); }
  get address2() { return this.addressForm.get('address2'); }
  get city() { return this.addressForm.get('city'); }
  get state() { return this.addressForm.get('state'); }
  get zip() { return this.addressForm.get('zip'); }

  initializeForm(): any {
    this.addressForm = this.formBuilder.group({
      id: [this.address.id],
      address1: [this.address.address1, Validators.compose([Validators.required, Validators.maxLength(100)])],
      address2: [this.address.address2, Validators.maxLength(100)],
      city: [this.address.city, Validators.compose([Validators.required, Validators.maxLength(50)])],
      state: [this.address.state, Validators.required],
      zip: [this.address.zip, Validators.compose([Validators.required, Validators.pattern(/\d{5}([\-]\d{4})?/)])]
    });

    if (this.nestableForm) {
      this.nestableForm.addControl('address', this.addressForm);
    }
  }

  stateCodeKeys(): string[] {
    return Object.keys(StateCodes).filter(key => !isNaN(Number(StateCodes[key])));
  }
}
