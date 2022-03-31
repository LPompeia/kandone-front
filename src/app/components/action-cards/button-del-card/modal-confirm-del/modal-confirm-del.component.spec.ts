import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmDelComponent } from './modal-confirm-del.component';

describe('ModalConfirmDelComponent', () => {
  let component: ModalConfirmDelComponent;
  let fixture: ComponentFixture<ModalConfirmDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmDelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
