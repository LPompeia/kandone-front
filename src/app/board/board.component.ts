import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { BoardService } from './board.service';
import { Board } from './board.interface';
import { Observable } from 'rxjs';
import { UserService } from '../authentication/user/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardView$!: Observable<Board>;
  public columnName = ColumnNameBoard;

  constructor(
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
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}

enum ColumnNameBoard {
    BACKLOG = 'backlog',
    TO_DO = 'to do',
    IN_PROGRESS = 'in progress',
    DONE = 'done'
}
