import { GroupedTask } from './../../../models/grouped-task';
import { LoginService } from './../../../services/login.service';
import { TasksService } from './../../../services/tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent
{

  taskGroups : GroupedTask[] | any

  constructor(private tasksService : TasksService, public loginService : LoginService)
  {

  }

  ngOnInit()
  {
    this.tasksService.getTasks().subscribe((response) =>{
      this.taskGroups = response
    })
  }

  getTaskGroupBgCssClass(taskStatusName: any) : string
  {
    var className : any;
    switch (taskStatusName)
    {
      case "Holding": className = "bg-secondary text-white"; break;
      case "Prioritized": className = "bg-primary text-white"; break;
      case "Started": className = "bg-info text-white"; break;
      case "Finished": className = "bg-success text-white"; break;
      case "Reverted": className = "bg-danger text-white"; break;
    }
    return className;
  }

  /* Get background color based on task priority */
  getTaskPriorityBadgeCssClass(taskPriorityName: any) : string
  {
    var className : any;
    switch (taskPriorityName)
    {
      case "Urgent": className = "badge-danger"; break;
      case "Normal": className = "badge-primary"; break;
      case "Below Normal": className = "badge-info"; break;
      case "Low": className = "badge-secondary"; break;
    }
    return className;
  }

  /* Get text color based on task status */
  getTaskGroupTextCssClass(taskStatusName: any) : string
  {
    var className : any;
    switch (taskStatusName)
    {
      case "Holding": className = "text-secondary"; break;
      case "Prioritized": className = "text-primary"; break;
      case "Started": className = "text-info"; break;
      case "Finished": className = "text-success"; break;
      case "Reverted": className = "text-danger"; break;
    }
    return className;
  }
}
