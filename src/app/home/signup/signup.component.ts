import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { lowerValidator } from './validators/lower.validator';
import { UserExistsService } from './validators/user-exists.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUsuarioForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userExistsService : UserExistsService,
    private signUpService : SignupService,
    private router: Router) { }

  ngOnInit(): void {
    this.newUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required, Validators.minLength(4)]],
        username: [
          '',
          [lowerValidator, Validators.required],
          [this.userExistsService.userExists()],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
      }
    )
  }

  signup() {
    if (this.newUsuarioForm.valid) {
      const newUser = this.newUsuarioForm.getRawValue() as NewUser;
      this.signUpService.signUp(newUser).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
