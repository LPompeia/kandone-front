import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardColumnTasksComponent } from './board-column-tasks.component';

describe('BoardColumnTasksComponent', () => {
  let component: BoardColumnTasksComponent;
  let fixture: ComponentFixture<BoardColumnTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardColumnTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardColumnTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
