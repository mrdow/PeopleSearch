import { Component, AfterViewChecked, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Address, StateCodes } from '../address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements AfterViewChecked {
  @ViewChild('addressForm') public form: NgForm;

  @Output() onValidationChanged = new EventEmitter<boolean>();
  private _address = new Address();
  @Input() address
  set(value: Address) {
    if (value) {
      this._address = value;
    }
  }
  get(): Address {
    return this._address;
  }

  public isValid: boolean;
  stateCodes = StateCodes;

  constructor() { }

  ngAfterViewChecked() {
    this.isValid = this.form.valid;
    this.onValidationChanged.emit(this.isValid);
  }

  validationChanged() {

  }

  stateCodeKeys(): string[] {
    return Object.keys(StateCodes);
  }
}
