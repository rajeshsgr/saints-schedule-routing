import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerRosterService {

  playerList=[
    
    {name:"Kiko Alonso", position:"OLB"},
    {name:"Alex Anzalone", position:"LB"},
    {name:"Eli Apple", position:"CB"},
    {name:"Terron Armstead", position:"T"},
    {name:"Vonn Bell", position:"S"},
    {name:"Drew Brees", position:"QB"},
    {name:"Teddy Bridgewater", position:"QB"},
    {name:"Malcom Brown", position:"DT"},
    {name:"Austin Carr", position:"WR"},
    {name:"Will Clapp", position:"C"},
    {name:"Jared Cook", position:"TE"},
    {name:"Ken Crawley", position:"CB"},
    {name:"Marcus Davenport", position:"DE"},
    {name:"Demario Davis", position:"LB"},
    {name:"Nick Easton", position:"C"},
    {name:"Mario Edwards Jr. ", position:"DE"},

    {name:"Kaden Elliss", position:"LB"},
    {name:"C.J. Gardner-Johnson", position:"S"},
    {name:"Ted Ginn Jr. ", position:"WR"},
    {name:"J.T. Gray", position:"DB"},
    {name:"Ethan Greenidge", position:"OL"},
    {name:"Saquan Hampton", position:"S"},
    {name:"Justin Hardee", position:"DB"},
    {name:"Deonte Harris", position:"WR"},
    {name:"Trey Hendrickson", position:"DE"},
    {name:"Josh Hill", position:"TE"},
    {name:"Taysom Hill", position:"QB"},
    {name:"Wes Horton", position:"DE"},
    {name:"Cameron Jordan", position:"DE"},
    {name:"Alvin Kamara", position:"RB"},
    {name:"Keith Kirkwood", position:"WR"},
    {name:"A.J. Klein ", position:"LB"},

    {name:"Marshon Lattimore", position:"CB"},
    {name:"Zach Line", position:"FB"},
    {name:"Wil Lutz", position:"K"},
    {name:"Erik McCoy", position:"OL"},
    {name:"Thomas Morstead", position:"P"},
    {name:"Latavius Murray", position:"RB"},
    {name:"Patrick Omameh", position:"OG"},
    {name:"Andrus Peat", position:"T"},
    {name:"Ryan Ramczyk", position:"T"},
    {name:"Sheldon Rankins", position:"DT"},
    {name:"Craig Robertson", position:"LB"},
    {name:"Patrick Robinson", position:"CB"},
    {name:"Tre'Quan Smith", position:"WR"},
    {name:"Taylor Stallworth", position:"DT"},
    {name:"Michael Thomas", position:"WR"},
    {name:"Shy Tuttle", position:"DL"},

    {name:"Larry Warford", position:"G"},
    {name:"Dwayne Washington", position:"RB"},
    {name:"P.J. Williams", position:"CB"},
    {name:"Marcus Williams", position:"S"},
    {name:"Zach Wood", position:"LS"}


] 

  constructor() { }
}
