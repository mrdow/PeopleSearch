import { ValidatorFn, FormGroup, ValidationErrors } from '@angular/forms';

export const DeathDateValidator: ValidatorFn = (personForm: FormGroup): ValidationErrors | null => {
  const birthDate = personForm.get('birthDate').value;
  const deathDate = personForm.get('deathDate').value;

  const ret = birthDate && deathDate && new Date(birthDate).getTime() > new Date(deathDate).getTime()
    ? { 'deathDate': true }
    : null;
  return ret;
}
