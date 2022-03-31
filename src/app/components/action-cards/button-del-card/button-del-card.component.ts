import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Board } from 'src/app/board/board.interface';
import { BoardService } from 'src/app/board/board.service';
import { CardTaskService } from 'src/app/board/card-task/card-task.service';
import { ModalConfirmDelComponent } from './modal-confirm-del/modal-confirm-del.component';

@Component({
  selector: 'app-button-del-card',
  templateUrl: './button-del-card.component.html',
  styleUrls: ['./button-del-card.component.css']
})
export class ButtonDelCardComponent implements OnInit {

  @Output() boardViewAfterAdd$ = new EventEmitter<Observable<Board>>();

  @Input() cardId! : number
  cardDeleted! : Observable<any>;

  constructor(
    public boardService: BoardService,
    public cardTaskService : CardTaskService,
    public dialog : MatDialog) { }

  ngOnInit(): void { }

  refreshDataBoard() : void {
    this.boardViewAfterAdd$.emit(this.boardService.returnCurrentBoardWithUser())
  }

  showTemplateDeleteCard() {

    const dialogRef = this.dialog.open(ModalConfirmDelComponent, {
      width: '350px',
      height: '230px',
      data: { cardDeleted: this.cardTaskService.getCardById(this.cardId), idCard: this.cardId },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshDataBoard()
    });
  }

}
