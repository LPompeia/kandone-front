import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditCardComponent } from './button-edit-card.component';

describe('ButtonEditCardComponent', () => {
  let component: ButtonEditCardComponent;
  let fixture: ComponentFixture<ButtonEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonEditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
