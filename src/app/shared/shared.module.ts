import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageInputsAlertModule} from '../components/message-inputs-alert/message-inputs-alert.module'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageInputsAlertModule,
    ReactiveFormsModule
  ],
  exports: [MessageInputsAlertModule, ReactiveFormsModule]
})
export class SharedModule { }
