import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardColumnTasksComponent } from './board-column-tasks/board-column-tasks.component';
import { CardTaskComponent } from './card-task/card-task.component';


@NgModule({
  declarations: [
    BoardComponent,
    BoardColumnTasksComponent,
    CardTaskComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
