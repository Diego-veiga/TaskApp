import { Task } from '../interfaces/task';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpRequestService } from './http-request.service';
import { format } from 'date-fns';


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private requestService: HttpRequestService) {}

  async create(task: Task) {
    try
    {
      this.validate(task);
      await this.requestService.post(`${environment.apiUrl}/Tasks`, task);
      return { success: true };
    }
    catch (err: any)
    {
      return { success: false, message: err.message };
    }
  }

  validate(task: Task)
  {
    const actualDate = new Date();
    const expected = new Date(task.expectedCompletionDate);

    if (!task || !task.description || !task.title)
    {
      throw new Error("Task inválida");
    }

    if (expected.getTime() < actualDate.getTime())
    {
      throw new Error("Data inválida");
    }
  }

  async getAll() {
    const tasks = await this.requestService.get<Task[]>(`${environment.apiUrl}/Tasks`);

    return tasks.map((task: Task) => ({
      ...task,
      expectedCompletionDate: format(new Date(task.expectedCompletionDate), 'dd/MM/yyyy')
    }));
  }

  getById() {
    console.log('******incluir Chamada do axios ');
  }

  update() {
    console.log('******incluir Chamada do axios ');
  }

  delete() {
    console.log('******incluir Chamada do axios ');
  }
}
