import { Component, Inject } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-modal-delete-task',
  templateUrl: './modal-delete-task.component.html',
  styleUrl: './modal-delete-task.component.scss',
})
export class ModalDeleteTaskComponent {
  task: Task;

  constructor(
    public dialogRef: MatDialogRef<ModalDeleteTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskServices: TaskService
  ) {
    this.task = data;
  }

  async confirmRemove(): Promise<void> {
    await this.taskServices.delete(this.task.id);
    this.closeModal()
  }

  closeModal() {
    this.dialogRef.close();
  }
}
