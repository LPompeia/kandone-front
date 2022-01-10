import { AbstractControl } from '@angular/forms';

export function lowerValidator(control: AbstractControl) {
  const value = control.value as string;
  if (value !== value.toLowerCase()) {
    return { lower: true };
  } else {
    return null;
  }
}
