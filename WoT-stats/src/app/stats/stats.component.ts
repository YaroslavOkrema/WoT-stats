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
  globalRating: number = 0;
  battles: number = 0;
  wins: number = 0;
  roundedWinPercentage: string = '';

  constructor(private apiService: ApiService) {}

  searchPlayer() {
    this.apiService.getPlayerId(this.playerName).subscribe(
      (response: PlayerId) => {
        if(response.status === 'ok' && response.data.length > 0) {
          const playerData = response.data[0];
          console.log(playerData);
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
    this.apiService.getPlayerStats(accountId).subscribe(
      (response: PlayerStats) => {
        if(response.status === 'ok' && response.data) {
          const playerData = response.data[accountId];
          if (playerData) {
            this.globalRating = playerData.global_rating;
            console.log(this.globalRating);

            const playerStatistics = response.data[accountId].statistics.all;
            if (playerStatistics) {
              this.battles = playerStatistics.battles;
              console.log(this.battles);
              
              this.wins = playerStatistics.wins;
              console.log(this.wins);

              const winPercentage = (this.wins / this.battles) * 100;
              this.roundedWinPercentage = winPercentage.toFixed(2);
              console.log(this.roundedWinPercentage);
            }
          }
        }
      }
    );
  }
} 