import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardTaskService } from 'src/app/board/card-task/card-task.service';
import { addCard } from '../addCard.interface';

@Component({
  selector: 'app-modal-confirm-add',
  templateUrl: './modal-confirm-add.component.html',
  styleUrls: ['./modal-confirm-add.component.css']
})
export class ModalConfirmAddComponent implements OnInit {

  newCardForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public cardTaskService : CardTaskService,
    public dialogRef: MatDialogRef<ModalConfirmAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {header: string, boardId: number}) { }

  ngOnInit(): void {
    this.newCardForm = this.formBuilder.group({
      description: ['', [Validators.required]],
    })
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  saveCard() {
    if (this.newCardForm.valid) {
      const newCard = this.newCardForm.getRawValue() as addCard;
      newCard.status = this.convertColumnNameForValue(this.data.header);
      newCard.board = {id: this.data.boardId}

      this.cardTaskService.addCard(newCard).subscribe(() => {
        this.closeModal();
      }, () => {
        alert('Card not include because failed server');
      })
    }
  }

  private convertColumnNameForValue(column : string) : number {
    switch(column) {
      case 'backlog':
        return 0
      case 'to do':
        return 1
      case 'in progress':
        return 2
      case 'done':
        return 3
      default:
        return -1
    }
  }

}
