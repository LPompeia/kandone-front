import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmAddComponent } from './modal-confirm-add.component';

describe('ModalConfirmAddComponent', () => {
  let component: ModalConfirmAddComponent;
  let fixture: ComponentFixture<ModalConfirmAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
