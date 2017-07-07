import { Component } from '@angular/core';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listEstorias = [{
    id: 1,
    name: "Nome1",
    description: "Description 1",
    count: 10,
    taskList: [],
    show: false
  },{
    id: 2,
    name: "Nome2",
    description: "Description 2",
    count: 20,
    taskList: [],
    show: false
  }];

  inserTask(id) {
    let estoria = this.listEstorias.find( i => i.id === id);
    estoria.show = !estoria.show;
  }

  finish(id) {
    this.listEstorias = this.listEstorias.filter((a) => a.id !== id);
  }

  createNewTask(payload) {
    let gina = this.listEstorias.find( i => i.id === payload.id);
    gina.show = false;
    gina.taskList.push(payload.task);
  }
}
