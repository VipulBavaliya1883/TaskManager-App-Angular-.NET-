import { Task } from "./task";

export class GroupedTask
{
    taskStatusName: string;
    tasks: Task[] | any;

    constructor()
    {
        this.taskStatusName = "";
        this.tasks = "";
    }
}
