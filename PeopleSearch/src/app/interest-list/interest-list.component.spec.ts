import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestListComponent } from './interest-list.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { Interest } from '../models/interest';

describe('InterestListComponent', () => {
  let component: InterestListComponent;
  let fixture: ComponentFixture<InterestListComponent>;

  let formBuilder: FormBuilder;

  let expectedDefaultInterests: FormArray;
  let expectedInterest1: Interest;
  let expectedInterest2: Interest;
  let expectedInterestForm1: FormGroup;
  let expectedInterestForm2: FormGroup;
  let expectedInitializedInterests: FormArray;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterestListComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [InterestListComponent]
    });

    fixture = TestBed.createComponent(InterestListComponent);
    component = fixture.componentInstance;

    formBuilder = new FormBuilder();

    expectedDefaultInterests = formBuilder.array([]);

    expectedInterest1 = new Interest();
    expectedInterest1.id = 1;
    expectedInterest1.name = 'interest1';
    expectedInterest1.isDeleted = false;

    expectedInterest2 = new Interest();
    expectedInterest1.id = 2;
    expectedInterest2.name = 'interest2';
    expectedInterest2.isDeleted = false;

    expectedInterestForm1 = formBuilder.group({
      id: expectedInterest1.id,
      name: expectedInterest1.name,
      isDeleted: expectedInterest1.isDeleted
    });

    expectedInterestForm2 = formBuilder.group({
      id: expectedInterest2.id,
      name: expectedInterest2.name,
      isDeleted: expectedInterest2.isDeleted
    });

    expectedInitializedInterests = formBuilder.array([expectedInterestForm1, expectedInterestForm2]);
  }));

  describe('class',
    () => {
      it('should be created',
        () => {
          expect(component).toBeTruthy();
        });

      it('should begin uninitialized',
        () => {
          expect(component.interestForms).toEqual(undefined);
        });

      describe('filteredInterests',
        () => {
          it('should return empty array if interestForms falsey',
            () => {
              expectedInitializedInterests.at(1).get('isDeleted').setValue(true);

              expect(component.filteredInterests).toEqual([]);
            });

          it('should return non-deleted interests',
            () => {
              component.interestForms = expectedInitializedInterests;
              expect(component.filteredInterests).toEqual([expectedInterestForm1.value, expectedInterestForm2.value]);

              expectedInitializedInterests.at(1).get('isDeleted').setValue(true);
              expect(component.filteredInterests).toEqual([expectedInterestForm1.value]);

              expectedInitializedInterests.at(0).get('isDeleted').setValue(true);
              expect(component.filteredInterests).toEqual([]);
            });
        });

      describe('delete',
        () => {
          it('should not modify interests if empty',
            () => {
              component.interestForms = expectedDefaultInterests;
              component.delete(expectedInterest1);

              expect(component.interestForms.value).toEqual(expectedDefaultInterests.value);
            });

          it('should soft delete if found',
            () => {
              component.interestForms = expectedInitializedInterests;
              component.delete(expectedInterest1);

              const currentForms = component.interestForms.value;
              expect(currentForms[0].isDeleted).toEqual(true);
            });
        });
    });

  describe('dom',
    () => {
      let debugElement: DebugElement;
      let htmlElement: HTMLElement;

      beforeEach(() => {
        fixture.autoDetectChanges(true);
        debugElement = fixture.debugElement;
        htmlElement = debugElement.nativeElement;
      });

      it('should be created',
        () => {
          expect(htmlElement).toBeTruthy();
        });

      it('should render #interest-list',
        () => {
          expect(htmlElement.querySelector('#interest-list')).toBeTruthy();
        });

      describe('interests',
        () => {
          it('should not render when uninitialized',
            () => {
              expect(htmlElement.querySelector('div#interest')).not.toBeTruthy();
            });

          it('should not render if no interests',
            () => {
              component.interestForms = expectedDefaultInterests;
              fixture.detectChanges();

              expect(htmlElement.querySelector('div#interest')).not.toBeTruthy();
            });

          it('should render div#interest for each interest when initialized',
            () => {
              component.interestForms = expectedInitializedInterests;
              fixture.detectChanges();

              const interestElements = htmlElement.querySelectorAll('div#interest');
              expect(interestElements.length).toEqual(expectedInitializedInterests.length);
              for (let i = 0; i < expectedInitializedInterests.length; i++) {
                expect(interestElements[i].textContent).toEqual(expectedInitializedInterests.at(i).get('name').value);
              }
            });

          it('should render div#interest for each non-deleted interest',
            () => {
              expectedInitializedInterests.at(1).get('isDeleted').setValue(true);
              component.interestForms = expectedInitializedInterests;
              fixture.detectChanges();

              const interestElements = htmlElement.querySelectorAll('div#interest');
              expect(interestElements.length).toEqual(expectedInitializedInterests.length - 1);
            });
        });

      describe('delete button',
        () => {
          it('should not render when uninitialized',
            () => {
              expect(htmlElement.querySelector('button#delete-interest')).not.toBeTruthy();
            });

          it('should not render if no interests',
            () => {
              component.interestForms = expectedDefaultInterests;
              fixture.detectChanges();

              expect(htmlElement.querySelector('button#delete-interest')).not.toBeTruthy();
            });

          it('should not render if no interests',
            () => {
              component.interestForms = expectedDefaultInterests;
              fixture.detectChanges();

              expect(htmlElement.querySelector('button#delete-interest')).not.toBeTruthy();
            });

          it('should render button#delete-interest for each interest when initialized',
            () => {
              component.interestForms = expectedInitializedInterests;
              fixture.detectChanges();

              const interestElements = htmlElement.querySelectorAll('button#delete-interest');
              expect(interestElements.length).toEqual(expectedInitializedInterests.length);
            });

          it('should render button#delete-interest for each non-deleted interest',
            () => {
              expectedInitializedInterests.at(1).get('isDeleted').setValue(true);
              component.interestForms = expectedInitializedInterests;
              fixture.detectChanges();

              const interestElements = htmlElement.querySelectorAll('button#delete-interest');
              expect(interestElements.length).toEqual(expectedInitializedInterests.length - 1);
            });

          it('should call delete with associated interest',
            () => {
              component.interestForms = expectedInitializedInterests;
              fixture.detectChanges();

              spyOn(component, 'delete');

              const interestElements: NodeListOf<HTMLInputElement> =
                htmlElement.querySelectorAll('button#delete-interest');
              interestElements[0].click();
              
              expect(component.delete).toHaveBeenCalledWith(expectedInterestForm1.value);
            });
        });
    });
});
