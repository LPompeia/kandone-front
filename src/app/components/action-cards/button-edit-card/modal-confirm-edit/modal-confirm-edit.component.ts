import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CardTaskService } from 'src/app/board/card-task/card-task.service';
import { editCard } from '../editCard.interface';

@Component({
  selector: 'app-modal-confirm-edit',
  templateUrl: './modal-confirm-edit.component.html',
  styleUrls: ['./modal-confirm-edit.component.css']
})
export class ModalConfirmEditComponent implements OnInit {

  cardEditedPreview$ : Observable<any> = this.data.cardEdited;

  editCardForm!: FormGroup;

  editCardSended! : editCard;

  constructor(
    private formBuilder: FormBuilder,
    private cardTaskService : CardTaskService,
    public dialogRef: MatDialogRef<ModalConfirmEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {cardEdited: Observable<any>, idCard: number }) { }

  ngOnInit(): void {
    this.loadFormWithValuesLoad();
  }

  loadFormWithValuesLoad() {
    this.cardEditedPreview$.subscribe((cardLoaded : any) => {

      this.editCardSended = cardLoaded;
      this.editCardSended.status = this.convertColumnNameForValue(cardLoaded.statusCard);

      this.editCardForm = this.formBuilder.group({
        description: [this.editCardSended.description, [Validators.required]],
      })
    })
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  editCard() {
    this.editCardSended.description = this.editCardForm.get('description')!.value

    const obj = {
      id: this.editCardSended.id,
      description: this.editCardSended.description,
      status: this.editCardSended.status,
      board: { id: this.editCardSended.board.id }
    }

    this.cardTaskService.updateCard(this.data.idCard, obj).subscribe(() => {
      this.closeModal();
    }, () => {
      alert('Card not edited because failed server');
    })
  }

  private convertColumnNameForValue(column : string) : number {
    switch(column) {
      case 'BACKLOG':
        return 0
      case 'TO_DO':
        return 1
      case 'IN_PROGRESS':
        return 2
      case 'DONE':
        return 3
      default:
        return -1
    }
  }

}
