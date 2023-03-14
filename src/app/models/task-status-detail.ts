import { TaskStatus } from "./task-status";

export class TaskStatusDetail
{
    taskStatusDetailID: number;
    taskID: number;
    taskStatusID: number;
    userID: string;
    description: string;
    taskstatus: TaskStatus | any;
    user: any;
    statsUpdationDateTimeString: string;

    constructor()
    {
        this.taskStatusDetailID = 0;
        this.taskID = 0;
        this.taskStatusID = 0;
        this.description = "";
        this.userID = "";
        this.taskstatus = "";
        this.user = "";
        this.statsUpdationDateTimeString = "";
    }
}
