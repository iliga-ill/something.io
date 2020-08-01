import { Component } from '@angular/core';
import { DataControlService } from './data-control.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  name="";
  Players;

  constructor(public service:DataControlService){
    this.Players=this.getPlayers();
  }


  print() {
    console.log(this.name);
    this.add();
  }

  async add() {
    let player={"id":null,"name":null};

    let id =
      this.Players.length > 0
        ? this.Players[this.Players.length - 1].id + 1
        : 0;

    player.id = id;
    player.name=this.name;

    this.addPlayer(player);
  }

  async addPlayer(player) {
    try {
      await this.service.addPlayer(player);
      this.Players=this.getPlayers();
   } catch (error) {
      console.log(error);
    }
  }


  async getPlayers() {
    try {
      this.Players = await this.service.getPlayers();
    } catch (error) {
      console.log(error)
    }
  }
}



