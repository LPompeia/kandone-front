import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { addCard } from "src/app/components/action-cards/button-add-new-card/addCard.interface";
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

  addCard(card : addCard) : Observable<any> {
    return this.httpClient.post<any>(`${API}/cards`, card);
  }

  delCard(cardId : number) : Observable<any> {
    return this.httpClient.delete<any>(`${API}/cards/${cardId}`)
  }

  updateCard(cardId : number, cardUpdate: any) : Observable<any> {
    return this.httpClient.put<any>(`${API}/cards/${cardId}`, cardUpdate)
  }

  getCardById(cardId: number) : Observable<any> {
    return this.httpClient.get<any>(`${API}/cards/${cardId}`)
  }

}

