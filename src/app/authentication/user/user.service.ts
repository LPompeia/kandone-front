import { Injectable } from '@angular/core';
import { TokenService } from '../token.service';
import { User } from './user';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usuarioSubject = new BehaviorSubject<User>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodificaJWT();
    }
  }

  private decodificaJWT() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.usuarioSubject.next(user);
  }

  returnUser() {
    return this.usuarioSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodificaJWT();
  }

  logout() {
    this.tokenService.excludeToken();
    this.usuarioSubject.next({});
  }

  hasLogged() {
    return this.tokenService.hasToken();
  }
}
