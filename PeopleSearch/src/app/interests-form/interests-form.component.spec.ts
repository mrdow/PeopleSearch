import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { InterestsFormComponent } from './interests-form.component';

describe('InterestsFormComponent', () => {
  let component: InterestsFormComponent;
  let fixture: ComponentFixture<InterestsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InterestsFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
