import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { SignupService } from '../signup.service';

@Injectable({
  providedIn: 'root',
})
export class UserExistsService {
  constructor(private signUpService: SignupService) {}

  userExistsByUsername() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.signUpService.checkUserExistsByUsername(nomeUsuario)
        ),
        map((userExists) =>
          userExists ? { userExists: true } : null
        ),
        first()
      );
    };
  }

  userExistsByEmail() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((emailUsuario) =>
          this.signUpService.checkUserExistsByEmail(emailUsuario)
        ),
        map((userExists) =>
          userExists ? { userExistsByEmail: true } : null
        ),
        first()
      );
    };
  }
}
