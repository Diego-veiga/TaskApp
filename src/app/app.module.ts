import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './pages/tasks/tasks.component';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalViewTaskComponent } from './pages/tasks/modal-view-task/modal-view-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TasksComponent,
    ModalViewTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
