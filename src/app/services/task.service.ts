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

  async create(task: Task): Promise<{ success: boolean; message?: string }> {
    try {
      this.validate(task);
      await this.requestService.post(`${environment.apiUrl}/Tasks`, task);
      return { success: true };
    } catch (err: any) {
      return { success: false, message: err.message };
    }
  }

  validate(task: Task): void {
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

  async getAll(): Promise<Task[]> {
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

  async update(id: string, status: number): Promise<void> {
    await this.requestService.patch(`${environment.apiUrl}/Tasks/${id}`, {
      status,
    });
  }

  async delete(id: string): Promise<void> {
    await this.requestService.delete(`${environment.apiUrl}/Tasks/${id}`);
  }
}
