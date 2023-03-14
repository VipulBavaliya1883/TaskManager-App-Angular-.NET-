import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task';
import { TaskStatus } from 'src/app/models/task-status';
import { TaskStatusDetail } from 'src/app/models/task-status-detail';
import { TaskStatusesService } from 'src/app/services/task-statuses.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task-status',
  templateUrl: './update-task-status.component.html',
  styleUrls: ['./update-task-status.component.scss']
})
export class UpdateTaskStatusComponent implements OnInit {
  //Properties to represent taskstatusdetails
  taskID: number | any;
  currentTask: Task = new Task();
  currentTaskStatusDetail: TaskStatusDetail = new TaskStatusDetail();
  editTaskStatusForm: FormGroup | any;
  taskStatuses: Observable<TaskStatus[]> | any;

  constructor(private tasksService: TasksService, private router: Router, private taskStatuesService: TaskStatusesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    //Receive taskid parameter
    this.activatedRoute.params.subscribe((params : any) => {
      this.taskID = params["taskid"];
    });

    //Create reactive form
    this.editTaskStatusForm = new FormGroup({
      thisStatusDetailID: new FormControl(0),
      taskID: new FormControl(null),
      taskStatusID: new FormControl(null, [Validators.required]),
      description: new FormControl(null)
    });

    //get taskstatuses from db for dropdownlist
    this.taskStatuses = this.taskStatuesService.getTaskStatuses();

    //get task by taskid
    this.tasksService.getTaskByTaskID(this.taskID).subscribe((task: Task) => {
      this.currentTask = task;

      //Load task details into Reactive form
      this.currentTaskStatusDetail.taskID = this.taskID;
      this.currentTaskStatusDetail.description = "";
      this.currentTaskStatusDetail.taskStatusID = task.currentTaskStatusID;
      this.currentTaskStatusDetail.taskStatusDetailID = 0;
      console.log(this.currentTaskStatusDetail);
      this.editTaskStatusForm.patchValue(this.currentTaskStatusDetail);
    });
  }

  onUpdateTaskStatusClick(event : any) {
    this.editTaskStatusForm["submitted"] = true;

    if (this.editTaskStatusForm.valid) {
      //send REST-API call to server
      this.tasksService.updateTaskStatus(this.editTaskStatusForm.value).subscribe((response : any) => {
        this.router.navigate(["/employee", "tasks"]);
      }, (error : any) => {
        console.log(error);
      });
    }
    else {
      console.log(this.editTaskStatusForm.errors);
    }
  }
}
