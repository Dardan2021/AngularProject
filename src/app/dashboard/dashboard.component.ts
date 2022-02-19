import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {

  }



  TeamMembers : Array<{ Region: string; TeamMemCount: string; unMem: string; }> | undefined;
  Designation: string | undefined;
  Username: string | undefined;
  NoOfTeamMembers: number | undefined;
  TotalCastOfAllProject: number | undefined
  PendingTasks: number | undefined
  UpcomingProject: number | undefined
  ProjectCost : number | undefined
  CurrentExpenditures : number | undefined
  AvailableFunds : number | undefined
  Clients: string[] | undefined;
  Projects: string[] | undefined;
  Years: string[] | undefined;
  Teams:  Array<{Region: string;Members:  Array<{Id: string; Name: string; Status: string;  }> }> | undefined;

  ngOnInit(): void {

    this.Designation="Team Leader";
    this.Username="Dardan";
    this.NoOfTeamMembers= 23;
    this.TotalCastOfAllProject=34;
    this.PendingTasks=44;
    this.UpcomingProject=44;
    this.ProjectCost=3234;
    this.CurrentExpenditures=2342;
    this.AvailableFunds=234234;
    this.Clients = ["wolkswagen","Dell","Abc infotech"];
    this.Projects = ["Project1","Project2","Project3"];
    this.Years = ["2019","2022","2020"];
    this.TeamMembers = [
      {
        Region:"East",TeamMemCount:"20",unMem:"40"
      },
      {
        Region:"West",TeamMemCount:"3",unMem:"3"
      }
      ,
      {
        Region:"North",TeamMemCount:"3",unMem:"3"
      }
      ,
      {
        Region:"South",TeamMemCount:"3",unMem:"3"
      }
    ];
    this.Teams =
      [
        {
          Region: "East", Members: [
            {
              Id: "3", Name: "fdsf", Status: "busy"
            },
            {
              Id: "2", Name: "sdf", Status: "busy"
            },
            {
              Id: "1", Name: "fsdsd", Status: "busy"
            }
          ]
        },
        {
          Region: "South", Members: [
            {
              Id: "3", Name: "fdsf", Status: "busy"
            },
            {
              Id: "2", Name: "sdf", Status: "busy"
            },
            {
              Id: "1", Name: "fsdsd", Status: "busy"
            }
          ]
        },
        {
          Region: "North", Members: [
            {
              Id: "3", Name: "fdsf", Status: "active"
            },
            {
              Id: "2", Name: "sdf", Status: "active"
            },
            {
              Id: "1", Name: "fsdsd", Status: "active"
            }
          ]
        },
        {
          Region: "West", Members: [
            {
              Id: "3", Name: "fdsf", Status: "active"
            },
            {
              Id: "2", Name: "sdf", Status: "active"
            },
            {
              Id: "1", Name: "fsdsd", Status: "active"
            }
          ]
        }
      ]
  }

  onProjectChange($event: MouseEvent)
  {
    // @ts-ignore
    if($event.target.innerHTML == "Project1")
    // @ts-ignore
    {
      this.PendingTasks=34;
      this.UpcomingProject=22;
      this.ProjectCost=32423;
    }
    // @ts-ignore
    if($event.target.innerHTML == "Project2")

    {
      this.PendingTasks=3423;
      this.UpcomingProject=22;
      this.ProjectCost=322222222;
    }
    // @ts-ignore
    if($event.target.innerHTML == "Project3")
      // @ts-ignore
    {
      this.PendingTasks=34;
      this.UpcomingProject=22;
      this.ProjectCost=111111111;
    }

  }



}
