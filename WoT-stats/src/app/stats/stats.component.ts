import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { PlayerStats } from '../interfaces/playerStats';
import { PlayerId } from '../interfaces/playerId';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  playerName: string = '';
  playerStats: PlayerStats | null = null;
  playerId: PlayerId | undefined;
  

  constructor(private apiService: ApiService) {}

  searchPlayer() {
    this.apiService.getPlayerId(this.playerName).subscribe(
      (response: any) => {
        if(response.status === 'ok' && response.data.length > 0) {
          const playerData = response.data[0];
          const {account_id} = playerData;
          this.playerId = account_id;
          console.log(this.playerId);
          this.getPlayerStats(account_id);
        } else {
          console.log('No player data found');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPlayerStats(accountId: number) {
    if(this.playerId) {
      this.apiService.getPlayerStats(accountId).subscribe(
        (stats: PlayerStats) => {
          this.playerStats = stats;
          console.log(stats);
        }
      )
    }
 }
} 
