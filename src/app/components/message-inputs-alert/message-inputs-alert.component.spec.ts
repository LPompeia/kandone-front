import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputsAlertComponent } from './message-inputs-alert.component';

describe('MessageInputsAlertComponent', () => {
  let component: MessageInputsAlertComponent;
  let fixture: ComponentFixture<MessageInputsAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageInputsAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
