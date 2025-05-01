import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalViewTaskComponent } from './modal-view-task.component';

describe('ModalViewTaskComponent', () => {
  let component: ModalViewTaskComponent;
  let fixture: ComponentFixture<ModalViewTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalViewTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
