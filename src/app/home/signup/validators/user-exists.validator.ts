import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { SignupService } from '../signup.service';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private signUpService: SignupService) {}

  userExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.signUpService.checkUserExists(nomeUsuario)
        ),
        map((userExists) =>
          userExists ? { userExists: true } : null
        ),
        first()
      );
    };
  }
}
