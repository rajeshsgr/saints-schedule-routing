import { Component, OnInit } from '@angular/core';
import { PlayerRosterService } from '../player-roster.service';

@Component({
  selector: 'app-team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.css']
})
export class TeamRosterComponent implements OnInit {

  teamRoster: {name:string, position:string} []=[];

  constructor(private teamRosterSvc: PlayerRosterService) { }

  ngOnInit() {

    console.log(this.teamRosterSvc.playerList.length);
    this.teamRoster=this.teamRosterSvc.playerList

  }

}
