import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamRosterComponent } from './team-roster/team-roster.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';


const routes: Routes = [
  {path: 'team-roster', component: TeamRosterComponent},
  {path: 'match-schedule', component: MatchScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [TeamRosterComponent,MatchScheduleComponent];
