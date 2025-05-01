import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEditTaskComponent } from './modal-create-edit-task.component';

describe('ModalCreateEditTaskComponent', () => {
  let component: ModalCreateEditTaskComponent;
  let fixture: ComponentFixture<ModalCreateEditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCreateEditTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCreateEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
