import { DeathDateValidator } from './death-date-validator.directive';
import { FormGroup, FormBuilder } from '@angular/forms';

describe('DeathDateValidator', () => {
  let formBuilder: FormBuilder;
  let form: FormGroup;
  let birthDate: Date;
  let deathDate: Date;

  beforeEach(() => {
    formBuilder = new FormBuilder();
  })

  it('should allow undefined birthDate and deathDate', () => {
    birthDate = undefined;
    deathDate = undefined;

    form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
      { validators: [DeathDateValidator] });

    expect(form.errors).toEqual(null);
  });

  it('should allow null birthDate and deathDate', () => {
    birthDate = null;
    deathDate = undefined;

    form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
      { validators: [DeathDateValidator] });

    expect(form.errors).toEqual(null);
  });

  it('should allow undefined birthDate', () => {
    birthDate = undefined;
    deathDate = new Date();

    form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
      { validators: [DeathDateValidator] });

    expect(form.errors).toEqual(null);
  });

  it('should allow null birthDate', () => {
    birthDate = null;
    deathDate = new Date();

    form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
      { validators: [DeathDateValidator] });

    expect(form.errors).toEqual(null);
  });

  it('should allow undefined deathDate', () => {
    birthDate = new Date();
    deathDate = undefined;

    form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
      { validators: [DeathDateValidator] });

    expect(form.errors).toEqual(null);
  });

  it('should allow null deathDate', () => {
    birthDate = new Date();
    deathDate = null;

    form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
      { validators: [DeathDateValidator] });

    expect(form.errors).toEqual(null);
  });

  it('should allow birthDate before deathDate', () => {
    birthDate = new Date('1/1/2019');
    deathDate = new Date('1/1/2020');

    form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
      { validators: [DeathDateValidator] });

    expect(form.errors).toEqual(null);
  });

  it('should allow same birthDate and deathDate', () => {
    const date = new Date();
    birthDate = date;
    deathDate = date;

    form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
      { validators: [DeathDateValidator] });

    expect(form.errors).toEqual(null);
  });

  it('should flag birthDate after deathDate',
    () => {
      const expectedError = { deathDate: true };
      birthDate = new Date('1/1/2020');
      deathDate = new Date('1/1/2019');

      form = formBuilder.group({
        birthDate: birthDate,
        deathDate: deathDate
      },
        { validators: [DeathDateValidator] });

      expect(form.errors).toEqual(expectedError);
    });
});
