import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''

  constructor(
    private authentication: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.authentication.authenticate(this.email, this.password)
    .subscribe(() => {
      this.router.navigate(['board']);
    }, (error => {
      alert('User or password is invalid. Try again !');
      console.log(error);
    }))
  }

}
