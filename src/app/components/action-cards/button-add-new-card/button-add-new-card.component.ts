import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalConfirmAddComponent } from './modal-confirm-add/modal-confirm-add.component';
import { MatDialog } from '@angular/material/dialog';
import { Board } from 'src/app/board/board.interface';
import { BoardService } from 'src/app/board/board.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'button-add-new-card',
  templateUrl: './button-add-new-card.component.html',
  styleUrls: ['./button-add-new-card.component.css']
})
export class ButtonAddNewCardComponent implements OnInit {

  @Input() column : string = ''
  @Input() boardId : number = -1;

  @Output() boardViewAfterAdd$ = new EventEmitter<Observable<Board>>();

  constructor(
    public boardService: BoardService,
    public dialog : MatDialog) { }

  ngOnInit(): void { }

  refreshDataBoard() : void {
    this.boardViewAfterAdd$.emit(this.boardService.returnCurrentBoardWithUser())
  }

  showTemplateAddCard() {
    const dialogRef = this.dialog.open(ModalConfirmAddComponent, {
      width: '350px',
      height: '230px',
      data: { header: this.column, boardId: this.boardId },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.refreshDataBoard();
    });
  }
}
