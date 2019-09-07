import { Component, OnInit } from '@angular/core';
import { MatchScheduleService } from '../match-schedule.service';

@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.css']
})
export class MatchScheduleComponent implements OnInit {


  matchSchedule: {date:string,team:string,location:string}[]=[];


  constructor(private matchScheduleSvc: MatchScheduleService) { 
  }

  ngOnInit() {

    this.matchSchedule=this.matchScheduleSvc.scheduleList;
  }

}
