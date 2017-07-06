import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() addTaskEvent = new EventEmitter();
  @Input() id;

  constructor() {  }

  public name: string;
  public description: string;

  ngOnInit() {
  }

  addTask() {
    const payload = {id: this.id, name: this.name, description: this.description};
    this.addTaskEvent.emit(payload);
  }

}
