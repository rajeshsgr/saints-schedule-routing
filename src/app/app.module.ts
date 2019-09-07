import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatchScheduleService } from './match-schedule.service';
import { PlayerRosterService } from './player-roster.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MatchScheduleService, PlayerRosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
