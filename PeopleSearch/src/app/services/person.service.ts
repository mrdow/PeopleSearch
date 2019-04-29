import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { Person } from '../models/person';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private peopleUrl = 'api/people';

  constructor(private http: HttpClient) { }

  /** GET all people from the server */
  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl)
      .pipe(map(response => {
        const people = response.map(data => new Person(data));
        return people;
      }))
      .pipe(
        catchError(this.handleError('getPeople', []))
      );
  }

  /**
   *  GET a list of people matching the searchString.
   * @param searchString - the string to search by
   */
  searchPeople(searchString: string): Observable<Person[]> {
    const url = `${this.peopleUrl}/?searchString=${searchString}`;

    return this.http.get<Person[]>(url)
      .pipe(map(response => {
        const people = response.map(data => new Person(data));
        return people;
      }))
      .pipe(
        catchError(this.handleError('searchPeople', []))
      );
  }

  /**
   * GET a person by id. Will be 404 if not found
   * @param id - the id of the person
   */
  getPerson(id: number): Observable<Person> {
    const url = `${this.peopleUrl}/${id}`;

    return this.http.get<Person>(url)
      .pipe(map(response => new Person(response)))
      .pipe(
        catchError(this.handleError<Person>(`getPerson id=${id}`))
      );
  }

  /**
   * GET a person by id. Return `undefined` when id not found
   * @param id - the id of the person
   */
  getPersonNo404<Data>(id: number): Observable<Person> {
    const url = `${this.peopleUrl}/?id=${id}`;
    return this.http.get<Person[]>(url)
      .pipe(
        map(people => people[0]), // returns a {0|1} element array
        catchError(this.handleError<Person>(`getPerson id=${id}`))
      );
  }

  /**
   * PUT - update the person on the server
   * @param person - the person to update
   */
  updatePerson(person: Person): Observable<any> {
    return this.http.put(this.peopleUrl, person, httpOptions)
      .pipe(
      catchError(this.handleError<any>('updatePerson'))
      );
  }

  /**
   * POST a new person to the server
   * @param person - the person to add
   */
  addPerson(person: Person): Observable<Person> {

    return this.http.post<Person>(this.peopleUrl, person, httpOptions)
      .pipe(map(response => new Person(response)))
      .pipe(
        catchError(this.handleError<Person>('addPerson'))
      );
  }

  /**
   * DELETE a person from the server
   * @param person - the person or id of the person to delete
   */
  deletePerson(person: Person | number): Observable<any> {
    const id = typeof person === 'number' ? person : person.id;
    const url = `${this.peopleUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions)
      .pipe(
        catchError(this.handleError<Person>('deletePerson'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
