import { AbstractControl } from "@angular/forms";

export function spaceBetweenValidator(control : AbstractControl) {

  const value = control.value as string;
  if (value.indexOf(" ") > -1 ) {
    return { space: true };
  } else {
    return null;
  }

}
