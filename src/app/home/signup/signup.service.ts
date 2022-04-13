import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private http : HttpClient) { }

  signUp(newUser: NewUser) {
    return this.http.post(`${API}/user/signup`, newUser);
  }

  checkUserExistsByUsername(username: string) {
    return this.http.get(`${API}/user/exists/${username}`);
  }

  checkUserExistsByEmail(email: string) {
    return this.http.get(`${API}/user/check/${email}`);
  }
}
