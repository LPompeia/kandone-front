import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessageInputsAlertModule} from '../components/message-inputs-alert/message-inputs-alert.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageInputsAlertModule
  ],
  exports: [MessageInputsAlertModule]
})
export class SharedModule { }
