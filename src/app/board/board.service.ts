import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from './board.interface';

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) { }


  getBoard(email : string) : Observable<Board> {
    return this.httpClient.get<Board>(`${API}/boards?email=${email}`);
  }


}
