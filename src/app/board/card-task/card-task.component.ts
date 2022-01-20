import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.css']
})
export class CardTaskComponent implements OnInit {

  @Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}
