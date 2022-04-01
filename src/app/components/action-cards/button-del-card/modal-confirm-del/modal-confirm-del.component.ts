import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CardTaskService } from 'src/app/board/card-task/card-task.service';
import { delButton } from '../delButton.interface';

@Component({
  selector: 'app-modal-confirm-del',
  templateUrl: './modal-confirm-del.component.html',
  styleUrls: ['./modal-confirm-del.component.css']
})
export class ModalConfirmDelComponent implements OnInit {

  cardDeleted$ : Observable<delButton> = this.data.cardDeleted;

  constructor(
    public cardTaskService : CardTaskService,
    public dialogRef: MatDialogRef<ModalConfirmDelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {cardDeleted: Observable<delButton>, idCard: number }
  ) { }

  ngOnInit(): void {

  }

  closeModal(): void {
    this.dialogRef.close();
  }

  deleteCard() {
    this.cardTaskService.delCard(this.data.idCard).subscribe(() => {
      this.closeModal();
    }, () => {
      alert('Card not deleted because failed server');
    })
  }

}
