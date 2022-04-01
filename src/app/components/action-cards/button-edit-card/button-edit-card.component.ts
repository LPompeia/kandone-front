import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Board } from 'src/app/board/board.interface';
import { BoardService } from 'src/app/board/board.service';
import { CardTaskService } from 'src/app/board/card-task/card-task.service';
import { editCard } from './editCard.interface';
import { ModalConfirmEditComponent } from './modal-confirm-edit/modal-confirm-edit.component';

@Component({
  selector: 'app-button-edit-card',
  templateUrl: './button-edit-card.component.html',
  styleUrls: ['./button-edit-card.component.css']
})
export class ButtonEditCardComponent implements OnInit {

  @Input() cardId! : number

  @Output() boardViewAfterAdd$ = new EventEmitter<Observable<Board>>();

  cardEdited! : Observable<editCard>;

  constructor(
    public boardService: BoardService,
    public cardTaskService : CardTaskService,
    public dialog : MatDialog) { }

  ngOnInit(): void { }

  refreshDataBoard() : void {
    this.boardViewAfterAdd$.emit(this.boardService.returnCurrentBoardWithUser())
  }


  showTemplateEditCard() {

    const dialogRef = this.dialog.open(ModalConfirmEditComponent, {
      width: '350px',
      height: '230px',
      data: { cardEdited: this.cardTaskService.getCardById(this.cardId), idCard: this.cardId },
    });

    dialogRef.afterClosed().subscribe(() => {
     this.refreshDataBoard();
    });
  }


}
