import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../authentication/user/user.service';
import { Board } from './board.interface';

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient,
              private userService: UserService) { }

  returnCurrentBoardWithUser() {
    return this.userService
              .returnUser()
              .pipe(switchMap((user) => this.getBoard(user.sub!)))
    }

  private getBoard(email : string) : Observable<Board> {
    return this.httpClient.get<Board>(`${API}/boards?email=${email}`);
  }


}
