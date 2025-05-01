import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  dataSource: any;
  listTasks: Task[];
  displayedColumns: string[] = [
    'id',
    'title',
    'status',
    'expectedCompletionDate',
    'actions',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private TaskService: TaskService, public modal: MatDialog) {}

  async ngOnInit() {
    debugger
    const tasks = await this.TaskService.getAll();
    this.dataSource = new MatTableDataSource(tasks);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {

    this.paginator._intl.itemsPerPageLabel = 'Itens por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }


  }

   openModalViewTask(task: Task) {
    console.log('**************openModalViewTask')
  }
  openModalCreateTask() {

    console.log('**************openModalCreateTask')
  }
  openModalDeleteTask(task: Task) {
    console.log('**************openModalDeleteTask')
  }

  openModalEditTask(task: Task) {
    console.log('**************openModalDeleteTask')
  }
}
