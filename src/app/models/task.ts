import { Project } from "./project";

export class Task
{
  taskID: number;
    taskName: string;
    description: string;
    createdOn: string;
    projectID: number;
    createdBy: string;
    assignedTo: string;
    taskPriorityID: number;
    lastUpdatedOn: number;
    currentStatus: number;
    currentTaskStatusID: number;

    project: Project | any;
    createdByUser: any;
    assignedToUser: any;
    taskStatusDetails: any;
createdOnString: any;

    constructor()
    {
        this.taskID = 0;
        this.taskName = "";
        this.description = "";
        this.createdOn = "";
        this.projectID = 0;
        this.createdBy = "";
        this.assignedTo = "";
        this.taskPriorityID = 0;
        this.lastUpdatedOn = 0;
        this.currentStatus = 0;

        this.project = "";
        this.createdByUser = null;
        this.assignedToUser = null;
        this.taskStatusDetails = null;
        this.taskStatusDetails = null;
        this.currentTaskStatusID = 0;
    }
}
