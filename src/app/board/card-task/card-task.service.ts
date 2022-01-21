import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardStatusDragDraw } from "./card.model";

const API = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})

export class CardTaskService {

  constructor(private httpClient : HttpClient) {

  }

  dragAndDrawStatus(id: number, cardStatus : CardStatusDragDraw) {

    return this.httpClient.patch<CardStatusDragDraw>(`${API}/cards/${id}`, cardStatus);

  }

}

