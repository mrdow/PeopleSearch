import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }
  
  getAllErrors(form: FormGroup | FormArray) {
    const result = [];

    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);

      if (control instanceof FormGroup || control instanceof FormArray) {
        const errors = this.getAllErrors(control);

        if (errors.length > 0) {
          result.push(errors);
        }
      } else {
        const controlErrors: ValidationErrors = form.get(key).errors;

        if (controlErrors) {
          Object.keys(controlErrors).forEach(keyError => {
            result.push({
              'control ': key,
              'error': keyError,
              'value': controlErrors[keyError]
            });
          });
        }
      }
    });

    return result;
  }
}
