import { Component } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  tasks: Task[] = [
    {id: '1',title: 'Tarefa 1', description: 'Executar tarefa 1', status: "Em andamento", creationDate: '26-05-2023 17:07:09', conclusionDate: '26-05-2023 17:07:09'},
    {id: '2',title: 'Tarefa 2', description: 'Executar tarefa 2', status: "Em andamento", creationDate: '26-05-2023 17:07:09', conclusionDate: ''},
    {id: '3',title: 'Tarefa 3', description: 'Executar tarefa 3', status: "Em andamento", creationDate: '26-05-2023 17:07:09', conclusionDate: '26-05-2023 17:07:09'},
    {id: '4',title: 'Tarefa 4', description: 'Executar tarefa 4', status: "Em andamento", creationDate: '26-05-2023 17:07:09', conclusionDate: ''},
    {id: '5',title: 'Tarefa 5', description: 'Executar tarefa 5', status: "Em andamento", creationDate: '26-05-2023 17:07:09', conclusionDate: '26-05-2023 17:07:09'},
    {id: '6',title: 'Tarefa 6', description: 'Executar tarefa 6', status: "Em andamento", creationDate: '26-05-2023 17:07:09', conclusionDate: ''},
    {id: '7',title: 'Tarefa 7', description: 'Executar tarefa 7', status: "Em andamento", creationDate: '26-05-2023 17:07:09', conclusionDate: '26-05-2023 17:07:09'}
  ];

  displayedColumns: string[] = ['title', 'description', 'status'];
}
