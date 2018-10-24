import { Component, OnInit, Input } from '@angular/core';

import { Interest } from '../interest';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.scss']
})
export class InterestListComponent implements OnInit {
  @Input() interests: Interest[];

  constructor() { }

  ngOnInit() {
  }

  delete(interest: Interest): void {
    this.interests.splice(this.interests.indexOf(interest), 1);
  }
}
