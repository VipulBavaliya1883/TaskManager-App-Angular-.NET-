import { ClientLocation } from './client-location';
export class Project
{
  projectID : any;
  projectName : any;
  dateOfStart : any;
  teamSize : any;
  active : any;
  status : string;
  clientLocationID : number;
  clientLocation : ClientLocation | any;

  constructor(){
    this.projectID = 0;
    this.projectName = null;
    this.dateOfStart = null;
    this.teamSize = 0;
    this.active = true;
    this.status = "";
    this.clientLocationID = 0;
    this.clientLocation = new ClientLocation();
  }
}
