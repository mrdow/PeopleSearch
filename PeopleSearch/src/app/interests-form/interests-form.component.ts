import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Interest } from '../models/interest';

@Component({
  selector: 'app-interests-form',
  templateUrl: './interests-form.component.html',
  styleUrls: ['./interests-form.component.scss']
})
export class InterestsFormComponent implements OnInit {
  @Input() interests: Interest[];

  interest = new Interest();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.interest.name = this.interest.name.trim();

    if (this.interest.name) {
      this.interests.push(this.interest);
      this.interest = new Interest();
    }
  }
}
