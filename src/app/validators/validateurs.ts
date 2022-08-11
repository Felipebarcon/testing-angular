import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validateurs Class
export class Validateurs {
  static checkNom(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const nomsInterdis = ['hitler', 'staline', 'booba', 'poutine'];
      if (nomsInterdis.includes(control.value)) {
        return { keynomsInterdis: 'Ce nom est interdit' };
      }
      return null;
    };
  }
}

// Validateur Function
export function checkAge(control: AbstractControl): ValidationErrors | null {
  if (control.value == 18) {
    return { keyagesInterdis: 'Cet age est interdits' };
  }
  return null;
}
