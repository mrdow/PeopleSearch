import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  @Input() person: Person;
  @Output() onDone = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  done() {
    this.onDone.emit(this.person);
  }

  get diagnostic() {
    return JSON.stringify(this.person);
  }
}
