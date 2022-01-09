import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-inputs-alert',
  templateUrl: './message-inputs-alert.component.html',
  styleUrls: ['./message-inputs-alert.component.css']
})
export class MessageInputsAlertComponent implements OnInit {

  @Input()
  mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
