import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'saintsTeamSchedule';

  constructor(private router: Router) {

  }

  loadSchedulePage() {

    this.router.navigate(['/match-schedule']);

  }

  loadRosterPage() {

    this.router.navigate(['/team-roster']);

  }
}
