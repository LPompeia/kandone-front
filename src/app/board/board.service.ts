import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from './board.interface';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) { }

  returnCurrentBoardWithUser() {
    return this.httpClient.get<Board>(`${API}/boards`);
  }

}
