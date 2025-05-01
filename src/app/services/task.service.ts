import { Task } from '../interfaces/task';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpRequestService } from './http-request.service';
import { format, isBefore, parse, startOfDay } from 'date-fns';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private requestService: HttpRequestService) {}

  async create(task: Task) {
    try {
      this.validate(task);
      await this.requestService.post(`${environment.apiUrl}/Tasks`, task);
      return { success: true };
    } catch (err: any) {
      return { success: false, message: err.message };
    }
  }

  validate(task: Task) {
    const today = startOfDay(new Date());
    const expected = parse(
      task.expectedCompletionDate,
      'yyyy-MM-dd',
      new Date()
    );

    if (!task || !task.description || !task.title) {
      throw new Error('Task inválida');
    }

    if (isBefore(expected, today)) {
      throw new Error('Data inválida');
    }
  }

  async getAll() {
    const tasks = await this.requestService.get<Task[]>(
      `${environment.apiUrl}/Tasks`
    );

    return tasks.map((task: Task) => ({
      ...task,
      expectedCompletionDate: format(
        new Date(task.expectedCompletionDate),
        'dd/MM/yyyy'
      ),
    }));
  }

  getById() {
    console.log('******incluir Chamada do axios ');
  }

  async update(id: string, status: number) {
    await this.requestService.patch(`${environment.apiUrl}/Tasks/${id}`, {
      status,
    });
  }

  delete() {
    console.log('******incluir Chamada do axios ');
  }
}
