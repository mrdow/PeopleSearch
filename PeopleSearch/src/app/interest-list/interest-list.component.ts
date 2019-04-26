import { Component, OnInit, Input } from '@angular/core';

import { Interest } from '../models/interest';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.scss']
})
export class InterestListComponent implements OnInit {
  @Input() interests: Interest[];

  get filteredInterests(): Interest[] {
    return this.interests.filter(i => !i.isDeleted);
  }

  constructor() { }

  ngOnInit() {
  }

  delete(interest: Interest): void {
    interest.isDeleted = true;
  }
}
