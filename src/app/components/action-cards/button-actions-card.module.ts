import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddNewCardComponent } from './button-add-new-card/button-add-new-card.component';
import { ButtonDelCardComponent } from '../action-cards/button-del-card/button-del-card.component';
import { ModalConfirmAddComponent } from './button-add-new-card/modal-confirm-add/modal-confirm-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmDelComponent } from './button-del-card/modal-confirm-del/modal-confirm-del.component';
import { ButtonEditCardComponent } from './button-edit-card/button-edit-card.component';
import { ModalConfirmEditComponent } from './button-edit-card/modal-confirm-edit/modal-confirm-edit.component';



@NgModule({
  declarations: [
    ButtonAddNewCardComponent,
    ButtonDelCardComponent,
    ModalConfirmAddComponent,
    ModalConfirmDelComponent,
    ButtonEditCardComponent,
    ModalConfirmEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    ButtonAddNewCardComponent,
    ButtonDelCardComponent,
    ButtonEditCardComponent
  ]
})
export class ButtonsActionCards { }
