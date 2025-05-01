import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../../../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-create-edit-task',
  templateUrl: './modal-create-edit-task.component.html',
  styleUrl: './modal-create-edit-task.component.scss',
})
export class ModalCreateEditTaskComponent {
  formTask: FormGroup;
  taskStatus = [
    { value: 1, viewValue: 'Pendentes' },
    { value: 2, viewValue: 'Concluída' },
  ];
  minimumDate: string;

  constructor(
    public dialogRef: MatDialogRef<ModalCreateEditTaskComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskServices: TaskService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    const today = new Date();
    this.minimumDate = today.toISOString().split('T')[0];
    this.buildForm();
  }

  buildForm() {
    this.formTask = this.formBuilder.group({
      title: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
        ],
      ],
      description: [null, [Validators.required, Validators.minLength(3)]],
      expectedCompletionDate: [null, [Validators.required]],
      status: [],
    });

    if (this.data?.id) {
      this.disableFieldForEdit();
    }
  }

  disableFieldForEdit() {
    this.formTask.patchValue({
      title: this.data.title,
      description: this.data.description,
      expectedCompletionDate: this.data.expectedCompletionDate,
      status: this.data.status,
    });
    this.formTask.get('title')?.disable();
    this.formTask.get('title')?.clearValidators();

    this.formTask.get('description')?.disable();
    this.formTask.get('description')?.clearValidators();
    this.formTask.get('expectedCompletionDate')?.disable();
    this.formTask.get('expectedCompletionDate')?.clearValidators();
  }

  async save() {
    const taskForm = this.formTask.getRawValue();
    taskForm.status = undefined;
    const response = await this.taskServices.create(taskForm);

    if (!response.success) {
      this.snackBar.open(response.message, 'Fechar', {
        duration: 3000,
      });
      return;
    }

    this.closeModal();
  }

  update() {
    const taskForm = this.formTask.getRawValue();


    this.taskServices.update();
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }
}
