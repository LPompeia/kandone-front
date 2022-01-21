import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { BoardService } from './board.service';
import { Board } from './board.interface';
import { Observable } from 'rxjs';
import { UserService } from '../authentication/user/user.service';
import { switchMap } from 'rxjs/operators';
import { CardTaskService } from './card-task/card-task.service';
import { CardStatusDragDraw } from './card-task/card.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardView$!: Observable<Board>;
  public columnName = ColumnNameBoard;

  constructor(
    private cardService: CardTaskService,
    private boardService: BoardService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.boardView$ = this.userService
      .returnUser()
      .pipe(switchMap((user) => this.boardService.getBoard(user.sub!)))
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      let cardIdUpdate = event.previousContainer.data[event.previousIndex].id
      let cardUpdate = new CardStatusDragDraw(event.container.id);

      this.cardService.dragAndDrawStatus(cardIdUpdate, cardUpdate).subscribe(() => {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }, (error) => {
        console.error(error)
      })
    }
  }

}

enum ColumnNameBoard {
    BACKLOG = 'backlog',
    TO_DO = 'to do',
    IN_PROGRESS = 'in progress',
    DONE = 'done'
}
