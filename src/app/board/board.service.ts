import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from './board.interface';

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) { }

  returnCurrentBoardWithUser() {
    return this.httpClient.get<Board>(`${API}/boards`);
  }

}
