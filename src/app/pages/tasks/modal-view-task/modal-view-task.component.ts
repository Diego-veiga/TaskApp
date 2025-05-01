import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../../interfaces/task';


@Component({
  selector: 'app-modal-view-task',
  templateUrl: './modal-view-task.component.html',
  styleUrl: './modal-view-task.component.scss',
})
export class ModalViewTaskComponent {
  task: Task;

  constructor(
    public dialogRef: MatDialogRef<ModalViewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any

  ) {
    this.task = data;

  }

  closeModal(){
    this.dialogRef.close();
  }
}
