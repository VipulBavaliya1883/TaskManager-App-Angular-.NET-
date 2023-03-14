import { DashboardService } from 'src/app/services/dashboard.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Designation: string = "";
  Username: String = "";
  NoOfTeamMembers: Number = 0;
  TotalCostOfAllProjects: Number = 0;
  PendingTasks: Number = 0;
  UpcomingProjects: string | number = 0;
  ProjectCost: Number = 0;
  CurrentExpenditure: Number = 0;
  AvailableFunds: Number = 0;
  ToDay: Date = new Date();

  Clients : string[] = [];
  Projects : string[] = [];
  Years : Number[] = [];
  TeamMembersSummary : any = [];
  TeamMembers : any = []

  constructor(private dashboardService:DashboardService){

  }

  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Vipul Bavaliya';
    this.NoOfTeamMembers = 245;
    this.TotalCostOfAllProjects = 30;
    this.PendingTasks = 10;
    this.UpcomingProjects = 1;
    this.ProjectCost = 20000;
    this.CurrentExpenditure = 30000;
    this.AvailableFunds = 50000;

    this.Clients = [
      "Kale Logistics Solutions","Simform Solutions","ArgueSoft","Matrix"
    ];

    this.Projects = [
      "Project A","Project B","Project C","Project D"
    ];
    //this.Years = [2019,2018,2017,2016];

    for(var i=2020;i>=2015;i--){
      this.Years.push(i);
    }

    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = [
      {Region:"East",Members:[
        {ID:1,Name:"Vipul Bavaliya",Status:"Available"},
        {ID:2,Name:"Nirmal Rathod",Status:"Busy"},
        {ID:3,Name:"Sagar Chandpa",Status:"Available"},
        {ID:4,Name:"Mihir Pariya",Status:"Busy"}
      ]},
      {Region:"West",Members:[
        {ID:1,Name:"Ajeet Bavaliya",Status:"Available"},
        {ID:2,Name:"Nirmal Rathod",Status:"Busy"},
        {ID:3,Name:"Sagar Chandpa",Status:"Available"},
        {ID:4,Name:"Mihir Pariya",Status:"Busy"}
      ]},
      {Region:"South",Members:[
        {ID:1,Name:"Vimal Bavaliya",Status:"Available"},
        {ID:2,Name:"Nirmal Rathod",Status:"Busy"},
        {ID:3,Name:"Sagar Chandpa",Status:"Available"},
        {ID:4,Name:"Mihir Pariya",Status:"Busy"}
      ]},
      {Region:"North",Members:[
        {ID:1,Name:"Vanraj Bavaliya",Status:"Available"},
        {ID:2,Name:"Nirmal Rathod",Status:"Busy"},
        {ID:3,Name:"Sagar Chandpa",Status:"Available"},
        {ID:4,Name:"Mihir Pariya",Status:"Busy"}
      ]}
    ];
  }

  onProjectChange($event:any){
    if($event.target.innerHTML.trim() == "Project A")
    {
      this.ProjectCost = 20000
      this.CurrentExpenditure = 30000
      this.AvailableFunds = 50000
    }
    else if($event.target.innerHTML.trim() == "Project B")
    {
      this.ProjectCost = 10000
      this.CurrentExpenditure = 30000
      this.AvailableFunds = 40000
    }
    else if($event.target.innerHTML.trim() == "Project C")
    {
      this.ProjectCost = 40000
      this.CurrentExpenditure = 20000
      this.AvailableFunds = 60000
    }
    else if($event.target.innerHTML.trim() == "Project D")
    {
      this.ProjectCost = 50000
      this.CurrentExpenditure = 25000
      this.AvailableFunds = 75000
    }
  }
}
