import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddNewCardComponent } from './button-add-new-card.component';

describe('ButtonAddNewCardComponent', () => {
  let component: ButtonAddNewCardComponent;
  let fixture: ComponentFixture<ButtonAddNewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddNewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddNewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
