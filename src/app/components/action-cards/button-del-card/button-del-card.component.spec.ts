import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDelCardComponent } from './button-del-card.component';

describe('ButtonDelCardComponent', () => {
  let component: ButtonDelCardComponent;
  let fixture: ComponentFixture<ButtonDelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
