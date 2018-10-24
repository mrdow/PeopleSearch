import { Component, OnInit, Input } from '@angular/core';

import { Address, StateCodes } from '../address';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() address: Address;

  stateCodes = StateCodes;

  constructor() { }

  ngOnInit() {
  }

  stateCodeKeys(): string[] {
    return Object.keys(StateCodes);
  }
}
