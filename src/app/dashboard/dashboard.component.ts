import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  Designation: string | undefined;
  Username: string | undefined;
  NoOfTeamMembers: number | undefined;
  TotalCastOfAllProject: number | undefined
  PendingTasks: number | undefined
  UpcomingProject: number | undefined
  ProjectCost : number | undefined
  CurrentExpenditures : number | undefined
  AvailableFunds : number | undefined

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


  }

}
