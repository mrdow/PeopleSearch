import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';

import {
  debounceTime, switchMap
} from 'rxjs/operators';

import { Person } from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.scss']
})
export class PersonSearchComponent implements OnInit {
  @Output() searchComplete = new EventEmitter<Person[]>();
  @Output() searchBegin = new EventEmitter();

  searchText: string = '';

  private searchTerms = new Subject<string>();

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.personService.searchPeople(term)),
    ).subscribe(people => this.searchComplete.emit(people));

    this.search();

  }

  // Push a search term into the observable stream.
  search(): void {
    var searchTerm = this.searchText ? this.searchText : '';
    this.searchTerms.next(searchTerm);
    this.searchBegin.emit();
  }
}
