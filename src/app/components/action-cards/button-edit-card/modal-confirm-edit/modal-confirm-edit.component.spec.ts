import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmEditComponent } from './modal-confirm-edit.component';

describe('ModalConfirmEditComponent', () => {
  let component: ModalConfirmEditComponent;
  let fixture: ComponentFixture<ModalConfirmEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
