import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors, FormArray } from '@angular/forms';

// This class is for debugging purposes only

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  getAllErrors(formName: string, form: FormGroup | FormArray) {
    const result = [];

    const formErrors = this.parseErrors(formName, form.errors);

    if (formErrors && formErrors.length) {
      result.push(formErrors);
    };
    
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);

      if (control instanceof FormGroup || control instanceof FormArray) {
        const errors = this.getAllErrors(key, control);

        if (errors.length > 0) {
          result.push(errors);
        }
      } else {
        const controlErrors = this.parseErrors(key, form.get(key).errors);

        if (controlErrors && controlErrors.length) {
          result.push(controlErrors);
        };
      }
    });

    return result;
  }

  parseErrors(control: string, errors: ValidationErrors) {
    const result = [];
    if (errors) {
      Object.keys(errors).forEach(keyError => {
        result.push({
          'control ': control,
          'error': keyError,
          'value': errors[keyError]
        });
      });
    }
    return result;
  }
}
