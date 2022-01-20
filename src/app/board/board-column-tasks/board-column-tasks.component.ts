import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-column-tasks',
  templateUrl: './board-column-tasks.component.html',
  styleUrls: ['./board-column-tasks.component.css']
})
export class BoardColumnTasksComponent implements OnInit {

  @Input() name : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
