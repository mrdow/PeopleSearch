import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PersonService } from './person.service';
import { Person } from '../models/person';

describe('PersonService',
  () => {
    let httpTestingController: HttpTestingController;
    let personService: PersonService;

    let expectedUrl: string;
    let errorMessage: string;
    let error: any;
    let expectedError: HttpErrorResponse;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });
      
      httpTestingController = TestBed.get(HttpTestingController);
      personService = TestBed.get(PersonService);

      errorMessage = 'error';
    });

    afterEach(() => {
      httpTestingController.verify();
    });

    it('should be created', () => {
      expect(personService).toBeTruthy();
    });

    describe('getPeople',
      () => {
        beforeEach(() => {
          expectedUrl = 'api/people';
          error = { status: 500, statusText: 'Internal Server Error', url: expectedUrl, error: errorMessage };
          expectedError = new HttpErrorResponse(error);
        });

        it('should make expected request',
          () => {
            personService.getPeople().subscribe();

            const req = httpTestingController.expectOne(expectedUrl);
            expect(req.request.method).toEqual('GET');

            req.flush([]);
          });

        it('should return expected result',
          () => {
            const person = { id: 0, firstName: 'Alex', lastName: 'Dow', birthDate: '1988-11-01', deathDate: null, image: null, address: null, interests: [] };
            const returnedPeople = [person];
            const expectedPeople = [new Person(person)];

            personService.getPeople().subscribe(result => {
              expect(result).toEqual(expectedPeople);
            }, fail);
            
            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(returnedPeople);
          });

        it('should handle error',
          () => {
            let consoleSpy = spyOn(console, 'error').and.callFake(() => {});

            personService.getPeople().subscribe(result => {
              expect(result).toEqual([]);
            }, fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(errorMessage, error);
            expect(consoleSpy).toHaveBeenCalledTimes(2);
            expect(consoleSpy.calls.all()[0].args).toEqual(['getPeople']);
            expect(consoleSpy.calls.all()[1].args).toEqual([expectedError]);
          });
      });

    describe('searchPeople',
      () => {
        let searchString;

        beforeEach(() => {
          searchString = 'test';
          expectedUrl = `api/people/?searchString=${searchString}`;
          error = { status: 500, statusText: 'Internal Server Error', url: expectedUrl, error: errorMessage };
          expectedError = new HttpErrorResponse(error);
        });

        it('should make expected request',
          () => {
            personService.searchPeople(searchString).subscribe();

            const req = httpTestingController.expectOne(expectedUrl);
            expect(req.request.method).toEqual('GET');

            req.flush([]);
          });

        it('should return expected result',
          () => {
            const person = { id: 0, firstName: 'Alex', lastName: 'Dow', birthDate: '1988-11-01', deathDate: null, image: null, address: null, interests: [] };
            const returnedPeople = [person];
            const expectedPeople = [new Person(person)];

            personService.searchPeople(searchString).subscribe(result => {
              expect(result).toEqual(expectedPeople);
            }, fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(returnedPeople);
          });

        it('should handle error',
          () => {
            let consoleSpy = spyOn(console, 'error').and.callFake(() => {});

            personService.searchPeople(searchString).subscribe(result => {
              expect(result).toEqual([]);
            }, fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(errorMessage, error);
            expect(consoleSpy).toHaveBeenCalledTimes(2);
            expect(consoleSpy.calls.all()[0].args).toEqual([`searchPeople searchString=${searchString}`]);
            expect(consoleSpy.calls.all()[1].args).toEqual([expectedError]);
          });
      });
    
    describe('getPerson',
      () => {
        let personId;

        beforeEach(() => {
          personId = 1;
          expectedUrl = `api/people/${personId}`;
          error = { status: 500, statusText: 'Internal Server Error', url: expectedUrl, error: errorMessage };
          expectedError = new HttpErrorResponse(error);
        });

        it('should make expected request',
          () => {
            personService.getPerson(personId).subscribe();

            const req = httpTestingController.expectOne(expectedUrl);
            expect(req.request.method).toEqual('GET');

            req.flush([]);
          });

        it('should return expected result',
          () => {
            const returnedPerson = { id: personId, firstName: 'Alex', lastName: 'Dow', birthDate: '1988-11-01', deathDate: null, image: null, address: null, interests: [] };
            const expectedPerson = new Person(returnedPerson);

            personService.getPerson(personId).subscribe(result => {
              expect(result).toEqual(expectedPerson);
            }, fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(returnedPerson);
          });

        it('should handle error',
          () => {
            let consoleSpy = spyOn(console, 'error').and.callFake(() => {});

            personService.getPerson(personId).subscribe(result => {
                expect(result).toEqual(undefined);
              },
              fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(errorMessage, error);
            expect(consoleSpy).toHaveBeenCalledTimes(2);
            expect(consoleSpy.calls.all()[0].args).toEqual([`getPerson id=${personId}`]);
            expect(consoleSpy.calls.all()[1].args).toEqual([expectedError]);
          });
      });

    describe('updatePerson',
      () => {
        let person: any;
        let returnedPerson: Person;

        beforeEach(() => {
          person = { id: 0, firstName: 'Alex', lastName: 'Dow', birthDate: '1988-11-01', deathDate: null, image: null, address: null, interests: [] };
          returnedPerson = new Person(person);
          expectedUrl = 'api/people';
          error = { status: 500, statusText: 'Internal Server Error', url: expectedUrl, error: errorMessage };
          expectedError = new HttpErrorResponse(error);
        });

        it('should make expected request',
          () => {
            personService.updatePerson(person).subscribe();

            const req = httpTestingController.expectOne(expectedUrl);
            expect(req.request.method).toEqual('PUT');

            req.flush(returnedPerson);
          });

        it('should return expected result',
          () => {
            personService.updatePerson(person).subscribe(result => {
              expect(result).toEqual(returnedPerson);
            }, fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(returnedPerson);
          });

        it('should handle error',
          () => {
            let consoleSpy = spyOn(console, 'error').and.callFake(() => {});

            personService.updatePerson(person).subscribe(result => {
                expect(result).toEqual(undefined);
              },
              fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(errorMessage, error);
            expect(consoleSpy).toHaveBeenCalledTimes(2);
            expect(consoleSpy.calls.all()[0].args).toEqual(['updatePerson']);
            expect(consoleSpy.calls.all()[1].args).toEqual([expectedError]);
          });
      });

    describe('addPerson',
      () => {
        let person: any;
        let returnedPerson: Person;

        beforeEach(() => {
          person = { id: 0, firstName: 'Alex', lastName: 'Dow', birthDate: '1988-11-01', deathDate: null, image: null, address: null, interests: [] };
          returnedPerson = new Person(person);
          expectedUrl = 'api/people';
          error = { status: 500, statusText: 'Internal Server Error', url: expectedUrl, error: errorMessage };
          expectedError = new HttpErrorResponse(error);
        });

        it('should make expected request',
          () => {
            personService.addPerson(person).subscribe();

            const req = httpTestingController.expectOne(expectedUrl);
            expect(req.request.method).toEqual('POST');

            req.flush(returnedPerson);
          });

        it('should return expected result',
          () => {
            personService.addPerson(person).subscribe(result => {
              expect(result).toEqual(returnedPerson);
            }, fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(returnedPerson);
          });

        it('should handle error',
          () => {
            let consoleSpy = spyOn(console, 'error').and.callFake(() => {});

            personService.addPerson(person).subscribe(result => {
                expect(result).toEqual(undefined);
              },
              fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(errorMessage, error);
            expect(consoleSpy).toHaveBeenCalledTimes(2);
            expect(consoleSpy.calls.all()[0].args).toEqual(['addPerson']);
            expect(consoleSpy.calls.all()[1].args).toEqual([expectedError]);
          });
      });

    describe('deletePerson',
      () => {
        let personId;
        let person: any;
        let returnedPerson: Person;

        beforeEach(() => {
          personId = 7;
          person = { id: personId, firstName: 'Alex', lastName: 'Dow', birthDate: '1988-11-01', deathDate: null, image: null, address: null, interests: [] };
          returnedPerson = new Person(person);
          expectedUrl = `api/people/${personId}`;
          error = { status: 500, statusText: 'Internal Server Error', url: expectedUrl, error: errorMessage };
          expectedError = new HttpErrorResponse(error);
        });

        it('should make expected request when given person',
          () => {
            personService.deletePerson(person).subscribe();

            const req = httpTestingController.expectOne(expectedUrl);
            expect(req.request.method).toEqual('DELETE');

            req.flush(returnedPerson);
          });

        it('should make expected request when given id',
          () => {
            personService.deletePerson(personId).subscribe();

            const req = httpTestingController.expectOne(expectedUrl);
            expect(req.request.method).toEqual('DELETE');

            req.flush(returnedPerson);
          });

        it('should return expected result',
          () => {
            personService.deletePerson(person).subscribe(result => {
              expect(result).toEqual(returnedPerson);
            }, fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(returnedPerson);
          });

        it('should handle error',
          () => {
            let consoleSpy = spyOn(console, 'error').and.callFake(() => {});

            personService.deletePerson(person).subscribe(result => {
                expect(result).toEqual(undefined);
              },
              fail);

            const req = httpTestingController.expectOne(expectedUrl);
            req.flush(errorMessage, error);
            expect(consoleSpy).toHaveBeenCalledTimes(2);
            expect(consoleSpy.calls.all()[0].args).toEqual([`deletePerson id=${personId}`]);
            expect(consoleSpy.calls.all()[1].args).toEqual([expectedError]);
          });
      });
  });
