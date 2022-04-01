import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { addCard } from "src/app/components/action-cards/button-add-new-card/addCard.interface";
import { delButton } from "src/app/components/action-cards/button-del-card/delButton.interface";
import { editCard } from "src/app/components/action-cards/button-edit-card/editCard.interface";
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

  addCard(card : addCard) {
    return this.httpClient.post<addCard>(`${API}/cards`, card);
  }

  delCard(cardId : number) {
    return this.httpClient.delete<delButton>(`${API}/cards/${cardId}`)
  }

  updateCard(cardId : number, cardUpdate: any) {
    return this.httpClient.put<editCard>(`${API}/cards/${cardId}`, cardUpdate)
  }

  getCardById(cardId: number) : Observable<any> {
    return this.httpClient.get<any>(`${API}/cards/${cardId}`)
  }

}

