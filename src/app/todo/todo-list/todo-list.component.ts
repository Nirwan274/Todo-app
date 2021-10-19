import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  task: any[] = [
    {
      "name": "Make TODO APP"
    },
    {
      "name": "Make component todo using cli"
    },
    {
      "name": "Make 4 components in todo"
    },
    {
      "name": "Perform various operations in component"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}


