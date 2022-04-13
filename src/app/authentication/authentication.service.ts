import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient : HttpClient,
    private UserService: UserService
  ) { }

  authenticate(email: string, password: string) {
    return this.httpClient
    .post(
      `${API}/user/login`,
      {
        email: email,
        password: password
      })

      .pipe(
        map((res : any) => {
          const authToken = res.token ?? '';
          this.UserService.saveToken(authToken);
        }));
  }
}

