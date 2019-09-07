import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchScheduleService {

  scheduleList=[{

    date: "Mon 09/09 · 6:10 PM CDT",
    team: "Houston Texans",
    location: "MERCEDES-BENZ SUPERDOME"
  },
  {

    date: "Sun 09/15 · 3:25 PM CDT",
    team: "Los Angeles Rams",
    location: "LOS ANGELES MEMORIAL COLISEUM"
  },
  {

    date: "Sun 09/22 · 3:25 PM CDT",
    team: "Seattle Seahawks",
    location: "CENTURYLINK FIELD"
  },

  {

    date: "Sun 09/29 · 7:20 PM CDT",
    team: "Dallas Cowboys",
    location: "MERCEDES-BENZ SUPERDOME"
  },

  {

    date: "Sun 10/06 · 12:00 PM CDT",
    team: "Tampa Bay Buccaneers",
    location: "MERCEDES-BENZ SUPERDOME"
  },
  {

    date: "Sun 10/13 · 12:00 PM CDT",
    team: "Jacksonville Jaguars",
    location: "TIAA BANK FIELD"
  },

  {

    date: "Sun 10/20 · 3:25 PM CDT",
    team: "Chicago Bears",
    location: "SOLDIER FIELD"
  },
  {

    date: "Sun 10/27 · 12:00 PM CDT",
    team: "Arizona Cardinals",
    location: "MERCEDES-BENZ SUPERDOME"
  },
  {

    date: "Sun 11/10 · 12:00 PM CST",
    team: "Atlanta Falcons",
    location: "MERCEDES-BENZ SUPERDOME"
  },
  {

    date: "Sun 11/17 · 12:00 PM CST",
    team: "Tampa Bay Buccaneers",
    location: "RAYMOND JAMES STADIUM"
  },
  {

    date: "Sun 11/24 · 12:00 PM CST",
    team: "Carolina Panthers",
    location: "MERCEDES-BENZ SUPERDOME"
  },
  {

    date: "Thu 11/28 · 7:20 PM CST",
    team: "Atlanta Falcons",
    location: "MERCEDES-BENZ SUPERDOME"
  },
  {

    date: "Sun 12/08 · 12:00 PM CST",
    team: "San Francisco 49ers",
    location: "MERCEDES-BENZ SUPERDOME"
  },
  {

    date: "Mon 12/16 · 7:15 PM CST",
    team: "Indianapolis Colts",
    location: "MERCEDES-BENZ SUPERDOME"
  },
  {

    date: "Sun 12/22 · 12:00 PM CST",
    team: "Tennessee Titans",
    location: "NISSAN STADIUM"
  },
  {

    date: "Sun 12/29 · 12:00 PM CST",
    team: "Carolina Panthers",
    location: "BANK OF AMERICA STADIUM"
  },


]

  constructor() { }
}
